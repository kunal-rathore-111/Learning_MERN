import { atom, selector } from "recoil";


export const networkAtom = atom({
    key: "networkAtom",
    default: selector({
        key: "networkAtomSelector",
        get: () => {
            return fetch("https://sum-server.100xdevs.com/notifications")
                .then(res => res.json())
                .then(data => { return data })
        }
    })
});

export const totalSelector = selector({
    key: "totalSelector",
    get: ({ get }) => {
        const allNotification = get(networkAtom);
        return allNotification.jobs +
            allNotification.messages +
            allNotification.network +
            allNotification.notification;
    }
})