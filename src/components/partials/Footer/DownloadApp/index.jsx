
const DownloadApp = ({ className, ...props }) => {
  return (
    <div className={className} {...props}>
      <div className="mb-4">
        <strong className="inline-block text-xl">Download App</strong>
      </div>
      <div className="space-y-2">
        <span>Save $3 with App New User Only</span>
        <div className="flex w-full max-w-60 gap-[4%]">
          <div className="size-full w-[38%]">
            <img
              className="size-full object-contain object-center"
              src="/images/partials/qr-code.png"
              alt="QR code"
            />
          </div>
          <div className="grid w-[56%] grid-rows-2 gap-[4%]">
            <div className="size-full">
              <img
                className="size-full object-contain object-center"
                src="/images/partials/play-store-logo.png"
                alt="play store logo"
              />
            </div>
            <div className="size-full">
              <img
                className="size-full object-contain object-center"
                src="/images/partials/play-store-logo.png"
                alt="play store logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
