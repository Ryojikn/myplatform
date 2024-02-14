// pages/AboutPage.jsx
import { Separator } from "@radix-ui/react-separator";
import { Button } from "../components/ui/button";
import { Github } from "lucide-react";
// ... (import os outros componentes usados no App)

export function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-xl font-bold">Sobre a gpt_playground_front</h1>
      <p className="text-sm text-muted-foreground">
        Essa é uma aplicação de exemplo que demonstra como usar o react-router-dom para criar rotas em uma aplicação React.
      </p>
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">Desenvolvida com 💜</span>
        <Separator orientation="vertical" className="h-6" />
        <Button variant="outline">
          <Github className="w-4 h-4 mr-2" />
          Github
        </Button>
      </div>
    </div>
  );
}