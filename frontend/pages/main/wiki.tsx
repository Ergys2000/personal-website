import dynamic from "next/dynamic";
import React from "react";
import MainLayout from "../../layouts/MainLayout";

let Editor = dynamic(() => import("../../components/Editor"), { ssr: false });

export default function Wiki(props: any) {
  const onSave = (editor: any) => {
    editor.save().then((res: string) => console.log(res));
  }
  return (
    <div className="w-full h-full bg-gray-300">
      <Editor onSave={onSave} />
    </div>
  );
}

Wiki.getLayout = (page: React.ReactElement) => {
  return (
    <MainLayout>
      <Wiki />
    </MainLayout>
  )
}