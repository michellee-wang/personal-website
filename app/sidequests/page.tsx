import { BackLink } from "../components/BackLink";
import { PageShell } from "../components/PageShell";
import PhotoGallery from "./PhotoGallery";
import SidequestsGlobeLoader from "./SidequestsGlobeLoader";

export default function Sidequests() {
  return (
    <PageShell width="wide">
      <BackLink />

      <h1 className="text-5xl font-bold mb-2 text-[var(--accent-color-dark)]">
        sidequests
      </h1>
      <p className="text-sm mb-8">
        places i&apos;ve &apos;lived&apos; — click a pin (or the labels below)
        to read each story. i love traveling and experiencing new cultures and
        people.<br />  i also enjoy photography, skiing, watercoloring, cooking and tennis! 
      </p>

      <SidequestsGlobeLoader />
      <PhotoGallery />
    </PageShell>
  );
}
