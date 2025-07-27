// components/AiChat/PromptInputArea.jsx

"use client";

import React from "react";
import { Textarea, Button, Tooltip } from "@nextui-org/react";
import { Icon } from "@iconify/react";

interface PromptInputAreaProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function PromptInputArea({
  input,
  setInput,
  isLoading,
  handleSubmit,
}: PromptInputAreaProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* --- Main Input Form --- */}
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col items-start rounded-medium bg-default-100 transition-colors hover:bg-default-200/70"
      >
        <Textarea
          aria-label="Prompt"
          placeholder="Ketik pesan Anda di sini..."
          value={input}
          onValueChange={setInput}
          disabled={isLoading}
          minRows={3}
          variant="flat"
          classNames={{
            inputWrapper: "!bg-transparent shadow-none",
            innerWrapper: "relative",
            input: "pt-1 pl-2 pb-6 !pr-10 text-medium",
          }}
          endContent={
            <div className="flex items-end gap-2 absolute bottom-3 right-2">
              <Tooltip showArrow content="Kirim Pesan">
                <Button
                  isIconOnly
                  type="submit"
                  color={!input.trim() ? "default" : "primary"}
                  isDisabled={isLoading || !input.trim()}
                  radius="lg"
                  size="sm"
                  variant="solid"
                >
                  <Icon
                    className="text-primary-foreground"
                    icon="solar:arrow-up-linear"
                    width={20}
                  />
                </Button>
              </Tooltip>
            </div>
          }
        />
        {/* --- Toolbar Bawah --- */}
        <div className="flex w-full items-center justify-between gap-2 overflow-auto px-4 pb-4">
          <div className="flex w-full gap-2">
            <Button
              size="sm"
              startContent={
                <Icon
                  className="text-default-500"
                  icon="solar:paperclip-linear"
                  width={18}
                />
              }
              variant="flat"
            >
              Attach
            </Button>
            <Button
              size="sm"
              startContent={
                <Icon
                  className="text-default-500"
                  icon="solar:notes-linear"
                  width={18}
                />
              }
              variant="flat"
            >
              Templates
            </Button>
          </div>
          <p className="py-1 text-tiny text-default-400">{input.length}/2000</p>
        </div>
      </form>
    </div>
  );
}
