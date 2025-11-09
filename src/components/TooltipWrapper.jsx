import * as Tooltip from "@radix-ui/react-tooltip";

export default function TooltipWrapper({ content, children }) {
  return (
    <Tooltip.Provider delayDuration={100}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side="top"
            className="bg-[#1a1a1a] text-gray-200 border border-gray-700 px-3 py-2 rounded-md text-sm shadow-[0_0_10px_rgba(147,51,234,0.4)] select-none"
          >
            {content}
            <Tooltip.Arrow className="fill-gray-700" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
