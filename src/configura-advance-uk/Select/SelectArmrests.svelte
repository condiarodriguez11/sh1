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

  const ukStyle = true;
</script>

<SelectionGrid visible={$configStore.selectorView === "ARMRESTS"} {ukStyle}>
  <!-- ARMRESTS -->
  <SelectionGridItem
    active={!$configStore.dropdownArmrest}
    title="Fixed armrests"
    description="Static, non-adjustable armrests, providing a stable and consistent resting place for the arms."
    standard={true}
    {ukStyle}
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
      src={`/images/configura-advance-uk/armrest--fixed--preview.webp`}
      class="image-frame-img"
    />
  </SelectionGridItem>
  <SelectionGridItem
    active={$configStore.dropdownArmrest}
    title="Drop-down armrests"
    description="Fitting on either side of the chair these armrests can be set to three different heights, to accommodate different users’ needs."
    learnMoreUrl="/specialist-seating/chair-accessories/drop-down-armrest"
    {ukStyle}
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
      src={`/images/configura-advance-uk/armrest--dropdown--preview.webp`}
      class="image-frame-img"
    />
  </SelectionGridItem>
</SelectionGrid>
