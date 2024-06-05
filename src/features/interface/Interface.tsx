import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import PieceForm from "@/components/PieceForm";

type Props = {
  children: React.ReactNode;
};

const Interface = ({ children }: Props) => {
  return (
    <div className="min-h-dvh">
      <ResizablePanelGroup direction="horizontal" className="min-h-dvh">
        <ResizablePanel className="h-auto" defaultSize={80}>
          {children}
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <PieceForm />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Interface;
