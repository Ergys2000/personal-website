import dynamic from "next/dynamic";
import React from "react";
import MainLayout from "../../layouts/MainLayout";


export default function Main(props: any) {
  return (
    <div className="w-full h-full bg-gray-300">
      <p>This is the index page, or home page</p>
    </div>
  );
}

Main.getLayout = (page: React.ReactElement) => {
  return (
    <MainLayout>
      <Main />
    </MainLayout>
  )
}