

import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { jobsAtom, messagesAtom, networkAtom, notificationAtom, totalNotificationsSelector } from "./store/atoms/topBar_Atom";
import { useMemo } from "react";

export default function App() {


  return <RecoilRoot>
    <Buttons></Buttons>
  </RecoilRoot>
}

function Buttons() {

  const networkCount = useRecoilValue(networkAtom);
  const messageCount = useRecoilValue(messagesAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const [jobsCount, setJobsCount] = useRecoilState(jobsAtom);

  const total = useRecoilValue(totalNotificationsSelector);

  /* const total = useMemo(() => {
    return networkCount + messageCount + notificationCount + jobsCount;
  }, [networkCount + messageCount + notificationCount + jobsCount])
 */
  return <>
    <br /><br />
    <button>Home</button>

    <button>Network ({networkCount > 99 ? "99+" : networkCount})</button>
    <button>Jobs ({jobsCount})</button>
    <button>Messages ({messageCount})</button>
    <button>Notification ({notificationCount})</button>

    <button onClick={() => { setJobsCount(c => c + 1) }}>Me ({total})</button>
  </>
}