import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Divider } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import EditorJsRenderer from "../../editorjs-renderer/EditorJsRenderer";
import { CleanData } from "../../editorjs-renderer/types";
import MainLayout from "../../layouts/MainLayout";

let Editor = dynamic(() => import("../../components/Editor"), { ssr: false });

export default function Wiki(props: any) {
  const [cleanData, setCleanData] = useState<CleanData>({
    time: '',
    blocks: [],
    version: '',
  });
  const handleChange = (cleanData: CleanData) => {
    setCleanData(cleanData);
  }
  return (
    <div className="w-full h-full p-10">
      <div className="bg-gray-900 min-w-min overflow-auto max-h-96">
        <Editor handleChange={handleChange} />
      </div>
      <Divider />
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