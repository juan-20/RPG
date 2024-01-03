import { Toggle } from "@radix-ui/react-toggle";
import { type Editor } from "@tiptap/react";
import { Bold, Heading1Icon, Heading2Icon, ItalicIcon } from "lucide-react";
import { toggleVariants } from "./toggle";

interface Props {
  editor: Editor | null;
}

const Toolbar = ({ editor }: Props) => {
  if (!editor) {
    return null;
  }
  return (
    <div className="bg-transparent text-black rounded-t-md flex justify-start gap-2 rounded-t-lg border dark:border-slate-800">
      <Toggle
        aria-label="Toggle heading"
        className={toggleVariants({ variant: "default" })}
        pressed={editor.isActive("heading")}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <Heading2Icon className="h-5 w-5" />
      </Toggle>
      <Toggle
        aria-label="Toggle italic"
        className={toggleVariants({ variant: "default" })}
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <ItalicIcon className="h-5 w-5" />
      </Toggle>
      <Toggle
        aria-label="Toggle bold"
        className={toggleVariants({ variant: "default" })}
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="h-5 w-5" />
      </Toggle>
    </div>
  );
};

export default Toolbar;
