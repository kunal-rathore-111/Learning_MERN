import { atom, selector } from "recoil";



export const networkAtom = atom({
    key: "NetworkCount",
    default: 104
})


export const jobsAtom = atom({
    key: "jobsCount",
    default: 0
})


export const notificationAtom = atom({
    key: "notificationCount",
    default: 17
})


export const messagesAtom = atom({
    key: "messagesCount",
    default: 4
})


export const totalNotificationsSelector = selector({
    key: "totalNotificationCount",
    get: ({ get }) => {
        const NetworkCount = get(networkAtom);
        const messagesCount = get(messagesAtom);
        const jobsCount = get(jobsAtom);
        const notificationCount = get(notificationAtom);

        return NetworkCount + messagesCount + jobsCount + notificationCount;
    }

})