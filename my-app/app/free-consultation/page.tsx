"use client"

import { SERVICES } from "@/app/_lib/org/category/services";
import {
  isLeaf,
  prettifyKey,
  type ServiceGroup,
  type ServiceLeaf,
} from "@/app/_lib/org/category/definitions";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { P } from "../_ui/typography/paragraph";

type StepOption = {
  key: string;
  label: string;
  nextGroup?: ServiceGroup;
  leaf?: ServiceLeaf;
};
type ServiceKey = keyof typeof SERVICES;

const findPathToLeaf = (
  group: ServiceGroup,
  targetLabel: string,
  currentPath: string[] = [],
): string[] | null => {
  for (const [key, node] of Object.entries(group)) {
    if (isLeaf(node)) {
      if (node.label === targetLabel) {
        return [...currentPath, key];
      }
      continue;
    }

    const nested = findPathToLeaf(node as ServiceGroup, targetLabel, [
      ...currentPath,
      key,
    ]);

    if (nested) {
      return nested;
    }
  }

  return null;
};

export default function FreeConsultationPage() {
  const searchParams = useSearchParams();

  const service = searchParams.get("service");
  const leaf = searchParams.get("leaf");
  const message = searchParams.get("message");

  const allServices = useMemo(
    () => Object.entries(SERVICES) as [ServiceKey, (typeof SERVICES)[ServiceKey]][],
    [],
  );

  const initialServiceKey = useMemo(() => {
    if (service) {
      const matched = allServices.find(([, cfg]) => cfg.category === service);
      if (matched) {
        return matched[0];
      }
    }
    return allServices[0]?.[0] ?? null;
  }, [allServices, service]);

  const [selectedServiceKey, setSelectedServiceKey] =
    useState<ServiceKey | null>(initialServiceKey);

  const selectedService = selectedServiceKey ? SERVICES[selectedServiceKey] : null;

  const initialPath = useMemo(() => {
    if (!selectedService || !leaf) {
      return [];
    }

    return findPathToLeaf(selectedService.subcategories, leaf) ?? [];
  }, [leaf, selectedService]);

  const [selectedPath, setSelectedPath] = useState<string[]>(initialPath);

  const currentGroup = useMemo(() => {
    if (!selectedService) {
      return null;
    }

    let group: ServiceGroup = selectedService.subcategories;

    for (const key of selectedPath) {
      const node = group[key];
      if (!node || isLeaf(node)) {
        break;
      }
      group = node as ServiceGroup;
    }

    return group;
  }, [selectedPath, selectedService]);

  const currentOptions = useMemo<StepOption[]>(() => {
    if (!currentGroup) {
      return [];
    }

    return Object.entries(currentGroup).map(([key, node]) => {
      if (isLeaf(node)) {
        return {
          key,
          label: node.label || prettifyKey(key),
          leaf: node,
        };
      }

      return {
        key,
        label: prettifyKey(key),
        nextGroup: node as ServiceGroup,
      };
    });
  }, [currentGroup]);

  const selectedLeaf = useMemo(() => {
    if (!selectedService || selectedPath.length === 0) {
      return null;
    }

    let node: ServiceGroup | ServiceLeaf = selectedService.subcategories;

    for (const key of selectedPath) {
      if (isLeaf(node)) {
        break;
      }
      const next = (node as ServiceGroup)[key];
      if (!next) {
        return null;
      }
      node = next;
    }

    return isLeaf(node) ? node : null;
  }, [selectedPath, selectedService]);

  const handleServiceSelect = (serviceKey: ServiceKey) => {
    setSelectedServiceKey(serviceKey);
    setSelectedPath([]);
  };

  const handleOptionSelect = (option: StepOption) => {
    if (option.leaf) {
      setSelectedPath((prev) => [...prev, option.key]);
      return;
    }

    if (option.nextGroup) {
      setSelectedPath((prev) => [...prev, option.key]);
    }
  };

  const handleBack = () => {
    setSelectedPath((prev) => prev.slice(0, -1));
  };

  const handleReset = () => {
    setSelectedPath([]);
  };

  const selectedServiceName = selectedService?.category ?? "";

  return (
    <main className="space-y-8 p-6">
      <h1 className="text-3xl font-bold">Free Consultation</h1>
      <P>{service}</P>
      <P>{leaf}</P>
      <P>{message}</P>

      <section className="space-y-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div>
          <h2 className="text-xl font-semibold">1. Select service</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {allServices.map(([key, cfg]) => (
              <button
                key={key}
                type="button"
                onClick={() => handleServiceSelect(key)}
                className={`rounded-lg border px-3 py-2 text-sm transition ${
                  selectedServiceKey === key
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:border-slate-500"
                }`}
              >
                {cfg.category}
              </button>
            ))}
          </div>
        </div>

        {selectedService && (
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold">
                {selectedLeaf ? "3. Confirm your selection" : "2. Select subcategory"}
              </h3>
              <div className="flex gap-2">
                {selectedPath.length > 0 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-100"
                  >
                    Back
                  </button>
                )}
                {selectedPath.length > 0 && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-100"
                  >
                    Start over
                  </button>
                )}
              </div>
            </div>

            {!selectedLeaf && (
              <div className="grid gap-2 sm:grid-cols-2">
                {currentOptions.map((option) => (
                  <button
                    key={option.key}
                    type="button"
                    onClick={() => handleOptionSelect(option)}
                    className="rounded-lg border border-slate-300 px-4 py-3 text-left hover:border-slate-500"
                  >
                    <div className="font-medium text-slate-900">{option.label}</div>
                    <div className="text-xs text-slate-500">
                      {option.leaf ? "Final option" : "Contains more options"}
                    </div>
                  </button>
                ))}
              </div>
            )}

            {selectedLeaf && (
              <div className="space-y-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                <p className="text-sm text-slate-700">
                  <span className="font-semibold">Service:</span> {selectedServiceName}
                </p>
                <p className="text-sm text-slate-700">
                  <span className="font-semibold">Selected quote item:</span>{" "}
                  {selectedLeaf.label}
                </p>
                <p className="text-sm text-slate-700">{selectedLeaf.summary}</p>
                {selectedLeaf.items.length > 0 && (
                  <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
                    {selectedLeaf.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        )}
      </section>

      {/* <ContactForm
        defaultValues={{
          service,
          message,
        }}
      /> */}
    </main>
  );
}
