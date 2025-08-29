// Tipos para elementos del formulario de contacto
export interface ContactFormElements {
    name: HTMLInputElement | null;
    email: HTMLInputElement | null;
    phone: HTMLInputElement | null;
    subject: HTMLInputElement | null;
    message: HTMLTextAreaElement | null;
    submitBtn: HTMLButtonElement | null;
}

// Reglas de validación
export interface ValidationRule {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
}

export interface ValidationRules {
    [key: string]: ValidationRule;
}

// Mensajes de error
export interface ErrorMessages {
    [key: string]: string;
}

// Configuración del carousel
export interface CarouselConfig {
    interval: number;
    wrap: boolean;
    touch: boolean;
}

// Datos de comentario local
export interface LocalComment {
    name: string;
    comment: string;
    rating: number;
    timestamp?: Date;
}

// Tipos para eventos de touch
export interface TouchEventData {
    startX: number;
    endX: number;
    threshold: number;
}

// Bootstrap Carousel instance type
declare global {
    interface Window {
        bootstrap: {
            Carousel: new (element: Element, options?: CarouselConfig) => {
                next(): void;
                prev(): void;
                pause(): void;
                cycle(): void;
            };
            Collapse: new (element: Element) => {
                hide(): void;
                show(): void;
            };
            Tooltip: new (element: Element) => void;
            Popover: new (element: Element) => void;
        };
        FB?: {
            init(params: any): void;
            XFBML: {
                parse(): void;
            };
        };
        fbAsyncInit?: () => void;
    }
}
