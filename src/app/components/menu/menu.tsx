import { memo, useRef, useEffect } from "react";
import { MenuProps } from "./types";

const Menu = ({ isOpen, onClose, options }: MenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        // Check if the clicked element is the button or its children
        const target = event.target as Element;
        if (!target.closest("button")) {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className="absolute top-full right-0 z-50 bg-gradient-to-b from-purple-600 to-purple-700 rounded-lg shadow-lg py-2 min-w-[200px] mt-1"
    >
      <div className="flex flex-col">
        {options.map((option) => {
          return (
            <button
              value={option.value}
              key={option.value}
              className="px-4 py-1 text-white text-left hover:bg-purple-500/30 transition-colors"
              onClick={(e) => {
                console.log("Add to My Podcasts clicked");
                onClose(e);
              }}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default memo(Menu);
