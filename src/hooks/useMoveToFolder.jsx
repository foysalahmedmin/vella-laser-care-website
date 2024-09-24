import {
  fetchEncryptedPath,
  fetchSharedMoveEncryptedPath,
} from "@/network/tree/treeApis";
import { fetchPrivateSharedEncryptedPath, fetchPublicSharedEncryptedPath } from "@/network/url/urlApis";
import {
  setCurrentEncodedPath,
  setCurrentUrlPath,
} from "@/redux/slices/url-slice";
import pathProcessor from "@/utils/pathProcessor";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useMoveToFolder = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { mutateAsync: mutateDrive } = useMutation({
    mutationFn: fetchEncryptedPath,
  });
  const { mutateAsync: mutateShared } = useMutation({
    mutationFn: fetchSharedMoveEncryptedPath,
  });
  const { mutateAsync: mutateGetPrivateSharedEncryptedPath } = useMutation({
    mutationFn: fetchPrivateSharedEncryptedPath
  })
  const { mutateAsync: mutateGetPublicSharedEncryptedPath } = useMutation({
    mutationFn: fetchPublicSharedEncryptedPath
  })
  const moveToFolderHandler = async ({
    basePath = "/my-drive",
    path = "/",
    type = "folder",
    shared,
    share_id,
    fileName,
    filePath,
    upload_id,
    user
  }) => {
    path = "/" + pathProcessor(path);
    if (basePath && path && type === "folder") {
      if (basePath === "/my-drive") {
        const encodedPath = await mutateDrive(path);
        if (encodedPath) {
          dispatch(setCurrentUrlPath(path));
          dispatch(setCurrentEncodedPath(encodedPath));
          navigation(`${basePath}/${encodedPath}`);
        }
      } else if (basePath === "/shared-with-me") {
        const encodedPath = await mutateShared({
          path,
          shared_by: shared,
          share_id: share_id,
        });
        if (encodedPath) {
          dispatch(setCurrentUrlPath(path));
          dispatch(setCurrentEncodedPath(encodedPath?.path));
          navigation(`${basePath}/${encodedPath?.path}`);
        }
      } else if (basePath === "/bin") {
        const encodedPath = await mutateDrive(path);
        if (encodedPath) {
          dispatch(setCurrentUrlPath(path));
          dispatch(setCurrentEncodedPath(encodedPath));
          navigation(`${basePath}/${encodedPath}`);
        }
      } else if (basePath === "/private-folder") {
        const encodedPath = await mutateGetPrivateSharedEncryptedPath({ fileName: fileName, filePath: filePath, upload_id: upload_id, shared_by: user, mime: "folder" });
        if (encodedPath?.path) {
          navigation(`${basePath}/${encodedPath?.path}`);
        }
      } else if (basePath === "/public-folder") {
        const encodedPath = await mutateGetPublicSharedEncryptedPath({ fileName: fileName, filePath: filePath, upload_id: upload_id, shared_by: user, mime: "folder", share_id: share_id });
        if (encodedPath?.path) {
          navigation(`/folder/${encodedPath?.path}`);
        }
      }
    }
  };
  return { moveToFolderHandler };
};

export default useMoveToFolder;
