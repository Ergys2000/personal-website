import dynamic from "next/dynamic";

let Editor = dynamic(() => import("../../components/Editor"), { ssr: false });

export default () => {
  const onSave = (editor: any) => {
    editor.save().then((res: string) => console.log(res));
  }
  return (
    <div className="w-full h-full">
      <Editor onSave={onSave} />
    </div>
  );
}