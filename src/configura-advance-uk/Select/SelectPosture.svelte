<script lang="ts">
  import SelectionGrid from "../../components/SelectionGrid.svelte";
  import SelectionGridItem from "../../components/SelectionGridItem.svelte";
  import SelectionGridItemImage from "../../components/SelectionGridItemImage.svelte";

  import { configStore } from "../configStore";
  import { getHeadrestException } from "../isHeadrestAllowed";

  let headrestException = "";
  configStore.subscribe((state) => {
    headrestException = getHeadrestException(state);
  });

  const ukStyle = false;
</script>

<SelectionGrid visible={$configStore.selectorView === "POSTURE"} title="Backrests" {ukStyle}>
  <!-- BACKREST -->

  <SelectionGridItem
    active={$configStore.backrest === "Waterfall"}
    title="Waterfall"
    description="sdd"
    standard={true}
    {ukStyle}
    onClick={() => {
      configStore.update((s) => {
        return {
          ...s,
          backrest: "Waterfall",
        };
      });
    }}
  >
    <SelectionGridItemImage
      src={`/images/configura-advance-uk/posture-backrest--waterfall--preview.webp`}
      class="image-frame-img"
    />
  </SelectionGridItem>
  <SelectionGridItem
    active={$configStore.backrest === "Cocoon"}
    title="Cocoon"
    {ukStyle}
    onClick={() => {
      configStore.update((s) => {
        return {
          ...s,
          backrest: "Cocoon",
        };
      });
    }}
  >
    <SelectionGridItemImage
      src={`/images/configura-advance-uk/posture-backrest--cocoon--preview.webp`}
      class="image-frame-img"
    />
  </SelectionGridItem>
  <SelectionGridItem
    active={$configStore.backrest === "Postural Backrest"}
    title="Postural Backrest"
    {ukStyle}
    onClick={() => {
      configStore.update((s) => {
        return {
          ...s,
          backrest: "Postural Backrest",
        };
      });
    }}
  >
    <SelectionGridItemImage
      src={`/images/configura-advance-uk/posture-backrest--posturalBackrest--preview.webp`}
      class="image-frame-img"
    />
  </SelectionGridItem>
  <SelectionGridItem
    active={$configStore.backrest === "Lateral Support Backrest"}
    title="Lateral Support Backrest"
    {ukStyle}
    onClick={() => {
      configStore.update((s) => {
        return {
          ...s,
          backrest: "Lateral Support Backrest",
        };
      });
    }}
  >
    <SelectionGridItemImage
      src={`/images/configura-advance-uk/posture-backrest--lateralSupportBackrest--preview.webp`}
      class="image-frame-img"
    />
  </SelectionGridItem>
  <SelectionGridItem
    active={$configStore.backrest === "Adjustable Lateral Support"}
    title="Adjustable Lateral Support"
    {ukStyle}
    onClick={() => {
      configStore.update((s) => {
        return {
          ...s,
          backrest: "Adjustable Lateral Support",
        };
      });
    }}
  >
    <SelectionGridItemImage
      src={`/images/configura-advance-uk/posture-backrest--adjustableLateralSupport--preview.webp`}
      class="image-frame-img"
    />
  </SelectionGridItem>
</SelectionGrid>

<SelectionGrid visible={$configStore.selectorView === "POSTURE"} title="Other" {ukStyle}>
  <!-- OTHER -->

  <SelectionGridItem
    active={"External Lateral Supports" === $configStore.lateralSupport}
    visible={false}
    title="External Lateral Supports"
    {ukStyle}
    onClick={() => {
      configStore.update((s) => {
        return {
          ...s,
          lateralSupport: "External Lateral Supports" !== s.lateralSupport ? "External Lateral Supports" : "None",
        };
      });
    }}
  >
    <SelectionGridItemImage
      src={`/images/configura-advance-uk/posture-other--externalLateralSupports--preview.webp`}
      class="image-frame-img"
    />
  </SelectionGridItem>

  <SelectionGridItem
  active={"Lateral Support Wedges" === $configStore.lateralSupport}
  visible={false}
    title="Lateral Support Wedges"
    {ukStyle}
    onClick={() => {
      configStore.update((s) => {
        return {
          ...s,
          lateralSupport: "Lateral Support Wedges" !== s.lateralSupport ? "Lateral Support Wedges" : "None",
        };
      });
    }}
  >
    <SelectionGridItemImage
      src={`/images/configura-advance-uk/posture-other--lateralSupportWedges--preview.webp`}
      class="image-frame-img"
    />
  </SelectionGridItem>

  <SelectionGridItem
    active={$configStore.profiledHeadrest}
    visible={false}
    title="Profiled Headrest"
    description="The profiled headrest offers increased head and neck support."
    {ukStyle}
    onClick={() => {
      configStore.update((s) => {
        return {
          ...s,
          profiledHeadrest: !s.profiledHeadrest,
        };
      });
    }}
  >
    <SelectionGridItemImage
      src={`/images/configura-advance-uk/accessory--profiledHeadrest--preview.webp`}
      class="image-frame-img"
    />
  </SelectionGridItem>
</SelectionGrid>
