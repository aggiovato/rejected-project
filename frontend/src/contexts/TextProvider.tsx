/*import { createContext, useContext, ReactNode } from "react";
import ReactTooltip from "react-tooltip";

// Contexto para el texto
interface TextContextProps {
  limit: number; // Límite de caracteres
}

const TextContext = createContext<TextContextProps | undefined>(undefined);

interface TextProviderProps {
  children: ReactNode;
  limit: number;
}

export const TextProvider = ({ children, limit }: TextProviderProps) => {
  return (
    <TextContext.Provider value={{ limit }}>
      {children}
      <ReactTooltip place="top" type="dark" effect="solid" />
    </TextContext.Provider>
  );
};

// Hook para usar el contexto
export const useTextContext = () => {
  const context = useContext(TextContext);
  if (!context) {
    throw new Error("useTextContext must be used within a TextProvider");
  }
  return context;
};

// Componente para mostrar texto con límite y tooltip
interface TextWithTooltipProps {
  text: string;
}

export const TextWithTooltip = ({ text }: TextWithTooltipProps) => {
  const { limit } = useTextContext();

  // Determinar si el texto excede el límite
  const isTextLong = text.length > limit;
  const displayText = isTextLong ? `${text.slice(0, limit)}...` : text;

  return <span data-tip={isTextLong ? text : undefined}>{displayText}</span>;
};

// Uso en la App
const App = () => {
  return (
    <TextProvider limit={20}>
      <div className="p-4">
        <TextWithTooltip text="This is a very long text that should be truncated if the length exceeds the limit." />
        <TextWithTooltip text="Short text" />
      </div>
    </TextProvider>
  );
};

export default App;*/
