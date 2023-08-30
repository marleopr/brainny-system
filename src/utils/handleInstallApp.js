import { toast } from "react-toastify";

let deferredPrompt = null;

export const handleInstallApp = () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === "accepted") {
                toast.success("Usuário aceitou a instalação");
            } else {
                toast.error("Usuário recusou a instalação");
            }
            deferredPrompt = null;
        });
    }
};

export const setupBeforeInstallPrompt = () => {
    const beforeInstallPromptHandler = (event) => {
        event.preventDefault();
        deferredPrompt = event;
    };

    window.addEventListener("beforeinstallprompt", beforeInstallPromptHandler);

    return () => {
        window.removeEventListener("beforeinstallprompt", beforeInstallPromptHandler);
    };
};
