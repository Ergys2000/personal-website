import dynamic from "next/dynamic";
import React, { useState } from "react";
import { CleanData } from "../../editorjs-parser/types";
import EditorJsRenderer from "../../editorjs-renderer/EditorJsRenderer";
import { Header, Paragraph, Checklist } from "../../editorjs-renderer/Renderers";
import MainLayout from "../../layouts/MainLayout";

let Editor = dynamic(() => import("../../components/Editor"), { ssr: false });

export default function Wiki(props: any) {
  const [cleanData, setCleanData] = useState<CleanData>({
    time: '',
    blocks: [],
    version: '',
  });
  const renderersObject = {
    'paragraph': Paragraph,
    'header': Header,
    'checklist': Checklist,
  }
  const onSave = (cleanData: CleanData) => {
    console.log(cleanData);
    setCleanData(cleanData);
  }
  return (
    <div className="w-full h-full bg-gray-300">
      <Editor onSave={onSave} />
      <h1>Rendered page:</h1>
      <EditorJsRenderer cleanData={cleanData as any} renderersObject={renderersObject} />
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