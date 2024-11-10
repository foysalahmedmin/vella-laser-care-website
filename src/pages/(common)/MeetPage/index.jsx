import { urls } from "@/api/urls.js";
import { fetchMe } from "@/network/user/userApis.js";
import useUser from "@/redux/slices/user-slice/useUser.js";
import { JitsiMeeting } from "@jitsi/react-sdk";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

const MeetPage = () => {
  const { role } = useUser();
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: me } = useQuery({
    queryKey: ["me", role],
    queryFn: () => fetchMe(),
  });
  return (
    <main>
      <JitsiMeeting
        domain={"meet.admissionsassist.com"}
        roomName={id}
        configOverwrite={{
          startWithAudioMuted: true,
          //moderator
          disableModeratorIndicator: true,
          startScreenSharing: true,
          enableEmailInStats: false,
          enableNoAudioDetection: true,
          disableShowMoreStats: true,
          enableNoisyMicDetection: true,
          cameraFacingMode: "user",
          localRecording: {
            disable: false,
            notifyAllParticipants: false,
            disableSelfRecording: false,
          },
          toolbarButtons: [
            "camera",
            "chat",
            "closedcaptions",
            "desktop",
            "dock-iframe",
            "etherpad",
            "filmstrip",
            "fullscreen",
            "hangup",
            // 'hangup-menu',
            "highlight",
            // 'invite',
            "linktosalesforce",
            "livestreaming",
            "microphone",
            "noisesuppression",
            "participants-pane",
            "profile",
            "raisehand",
            "recording",
            "security",
            "select-background",
            "settings",
            "shareaudio",
            "sharedvideo",
            "shortcuts",
            // 'stats',
            "tileview",
            "toggle-camera",
            "undock-iframe",
            "videoquality",
            "whiteboard",
          ],
        }}
        interfaceConfigOverwrite={{
          APP_NAME: "Vella Laser Care",
          DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
        }}
        userInfo={{
          displayName: me?.name,
          email: me?.email,
          avatar: `${urls?.user_photos}/${me?.photo}`,
          role: "none",
        }}
        spinner={() => <div>loading .....</div>}
        onReadyToClose={() => {
          if (role === "parlor") {
            navigate("/parlor/dashboard");
          } else {
            navigate("/user/dashboard");
          }
        }}
        onApiReady={(externalApi) => {}}
        getIFrameRef={(iframeRef) => {
          iframeRef.style.height = "800px";
        }}
      />
    </main>
  );
};

export default MeetPage;
