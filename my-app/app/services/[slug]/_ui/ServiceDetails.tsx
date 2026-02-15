import {
  isServiceLeaf,
  type ServiceGroup,
} from "@/app/_lib/org/category/definitions";
import { cn } from "@/app/_lib/utils/cn";

import { ServiceGroupSection } from "./ServiceGroupSection";
import ServiceLeafCard from "./ServiceLeafCard";

export default function ServiceDetails({
  group,
  level = 0,
}: {
  group: ServiceGroup;
  level?: number;
}) {
  return (
    <div className={cn("space-y-4", level === 0 && "space-y-6")}>
      {Object.entries(group).map(([ key, node], index) => {
        if (isServiceLeaf(node)) {
          return <ServiceLeafCard key={key} leaf={node} level={level}  index={index}/>;
        }

        const childGroup = node as ServiceGroup;

        return (
          <ServiceGroupSection key={key} groupKey={key} level={level}>
            <ServiceDetails group={childGroup} level={level + 1} />
          </ServiceGroupSection>
        );
      })}
    </div>
  );
}
