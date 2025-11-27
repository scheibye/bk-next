import { ElementType, ReactNode } from "react";

export interface VariantMap {
  [key: string]: string;
}

export interface TextProps<T extends ElementType, VMap extends VariantMap> {
  as?: T;
  variant?: keyof VMap;
  variantMap: VMap;
  defaultVariant: keyof VMap;
  children?: ReactNode;
  className?: string;
}

export function Text<T extends ElementType = "p", VMap extends VariantMap = VariantMap>({
  as,
  variant,
  variantMap,
  defaultVariant,
  children,
  className = "",
  ...props
}: TextProps<T, VMap>) {
  const Component = as || "p";
  const effectiveVariant = variant || defaultVariant;
  const defaultClasses = variantMap[defaultVariant] || "";
  const variantClasses = variantMap[effectiveVariant as keyof VMap] || defaultClasses;
  const colorClasses = "text-inherit";

  if (variant && !(variant in variantMap) && variant !== defaultVariant) {
    console.error(
      `[Text Component] Variant "${String(variant)}" not found. Applying default "${String(
        defaultVariant
      )}".`
    );
  }

  const combinedClassName = `${variantClasses} ${colorClasses} ${className}`.trim();

  return (
    <Component
      className={combinedClassName}
      {...props}
    >
      {children}
    </Component>
  );
}
