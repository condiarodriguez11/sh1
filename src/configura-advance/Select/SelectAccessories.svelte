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
</script>

<SelectionGrid visible={true} title="Backrests">
  <!-- BACKREST -->

  <SelectionGridItem
    active={$configStore.backrest === "normal"}
    title="Waterfall backrest"
    onClick={() => {
      configStore.update((s) => {
        return {
          ...s,
          backrest: "normal",
          headrest: false,
        };
      });
    }}
  >
    <SelectionGridItemImage
      src={`/images/configura-advance/backrest--standard--preview.jpg`}
      class="image-frame-img"
    />
  </SelectionGridItem>
  <SelectionGridItem
    active={$configStore.backrest === "postural"}
    title="Postural backrest"
    onClick={() => {
      configStore.update((s) => {
        return {
          ...s,
          backrest: "postural",
        };
      });
    }}
  >
    <SelectionGridItemImage
      src={`/images/configura-advance/backrest--postural--preview.jpg`}
      class="image-frame-img"
    />
  </SelectionGridItem>
</SelectionGrid>

<SelectionGrid visible={true} title="Armrests">
  <!-- ARMRESTS -->
  <SelectionGridItem
    active={!$configStore.dropdownArmrest}
    title="Fixed armrests"
    onClick={() => {
      configStore.update((s) => {
        return {
          ...s,
          dropdownArmrest: false,
        };
      });
    }}
  >
    <SelectionGridItemImage
      src={`/images/configura-advance/armrest--fixed--preview.jpg`}
      class="image-frame-img"
    />
  </SelectionGridItem>
  <SelectionGridItem
    active={$configStore.dropdownArmrest}
    title="Dropdown armrests"
    onClick={() => {
      configStore.update((s) => {
        return {
          ...s,
          dropdownArmrest: true,
        };
      });
    }}
  >
    <SelectionGridItemImage
      src={`/images/configura-advance/armrest--dropdown--preview.jpg`}
      class="image-frame-img"
    />
  </SelectionGridItem>
</SelectionGrid>

<SelectionGrid visible={true} title="Accessories">
  <SelectionGridItem
    notAllowedMessage={headrestException}
    active={$configStore.headrest}
    title="Headrest"
    onClick={() => {
      configStore.update((s) => {
        return {
          ...s,
          headrest: !s.headrest,
        };
      });
    }}
  >
    <SelectionGridItemImage
      src={`/images/configura-advance/headrest--preview.jpg`}
      class="image-frame-img"
    />
  </SelectionGridItem>
  <SelectionGridItem
    active={$configStore.lateralSupport}
    title="Lateral support"
    onClick={() => {
      configStore.update((s) => {
        return {
          ...s,
          lateralSupport: !s.lateralSupport,
        };
      });
    }}
  >
    <SelectionGridItemImage
      src={`/images/configura-advance/lat_support_preview.jpg`}
      class="image-frame-img"
    />
  </SelectionGridItem>
</SelectionGrid>
