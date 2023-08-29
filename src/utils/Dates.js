import { format } from "date-fns";

export const formatDate = (dateTimeString) => {
    const parsedDate = new Date(dateTimeString);
    return format(parsedDate, "dd/MM/yy");
};
export const formatTime = (dateTimeString) => {
    const parsedDate = new Date(dateTimeString);
    return format(parsedDate, "HH:mm");
};

