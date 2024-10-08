<script lang="ts">
  import SelectionGrid from "../../components/SelectionGrid.svelte";
  import SelectionGridItem from "../../components/SelectionGridItem.svelte";
  import SelectionGridItemImage from "../../components/SelectionGridItemImage.svelte";

  import { configStore } from "../configStore";
</script>

<SelectionGrid visible={$configStore.selectorView === "ACCESSORIES"} ukStyle={true}>
  <SelectionGridItem
    active={$configStore.proTectSideRail === "Included"}
    visible={false}
    title="ProTect Side Rail"
    description="A concealed side rail system incorporating mesh and integrated padding."
    learnMoreUrl="/bed-accessories/protect-siderail"
    ukStyle={true}
    onClick={() => {
      configStore.update((s) => {
        return {
          ...s,
          proTectSideRail:
            s.proTectSideRail === "Included" ? "Not included" : "Included",
        };
      });
    }}
  >
    <SelectionGridItemImage
      src={`/images/empresa-uk/accessory/Protect Rails - preview.png`}
      alt={"ProTect Side Rail"}
    />
  </SelectionGridItem>
  <SelectionGridItem
    active={$configStore.fabricSideRails === "Included"}
    title="Fabric Side Rails"
    description="Full-length mesh side rails with integrated padding are designed to create a safer environment for the bed user."
    learnMoreUrl="/bed-accessories/fabric-side-rails"
    ukStyle={true}
    visible={false}
    onClick={() => {
      configStore.update((s) => {
        return {
          ...s,
          fabricSideRails:
            s.fabricSideRails === "Included" ? "Not included" : "Included",
        };
      });
    }}
  >
    <SelectionGridItemImage
      src={`/images/empresa-uk/accessory/Fabric Side Rails - preview.png`}
      alt={"Fabric Side Rails"}
    />
  </SelectionGridItem>
  <SelectionGridItem
    active={$configStore.foldingSideRails === "Included"}
    title="Folding Side Rails"
    description="Folding side rails  intended to help to create a safer environment for the bed user."
    learnMoreUrl="/bed-accessories/folding-side-rails"
    ukStyle={true}
    visible={false}
    onClick={() => {
      configStore.update((s) => {
        return {
          ...s,
          foldingSideRails:
            s.foldingSideRails === "Included" ? "Not included" : "Included",
        };
      });
    }}
  >
    <SelectionGridItemImage
      src={`/images/empresa-uk/accessory/Folding Side Rails - preview.png`}
      alt={"Folding Side Rails"}
    />
  </SelectionGridItem>
  <SelectionGridItem
    active={$configStore.foldingSideRailsWithBumper === "Included"}
    title="Folding Side Rails with Bumper"
    description="The folding side rail bumpers offer a soft padded surface to reduce the risk of injury."
    learnMoreUrl="/bed-accessories/folding-side-rail-bumpers"
    ukStyle={true}
    visible={false}
    onClick={() => {
      configStore.update((s) => {
        return {
          ...s,
          foldingSideRailsWithBumper:
            s.foldingSideRailsWithBumper === "Included" ? "Not included" : "Included",
        };
      });
    }}
  >
    <SelectionGridItemImage
      src={`/images/empresa-uk/accessory/Folding Side Rails with Bumper - preview.png`}
      alt={"Folding Side Rails with Bumper"}
    />
  </SelectionGridItem>
  <SelectionGridItem
    active={$configStore.assistBar === "Short"}
    title={"Bed Lever"}
    description="The bed lever securely fixes to either side of the bed frame providing support for bed mobility and transfers."
    learnMoreUrl="/bed-accessories/bed-lever"
    ukStyle={true}
    onClick={() => {
      configStore.update((s) => {
        return {
          ...s,
          assistBar:
            s.assistBar === "Short" ? "None" : "Short",
        };
      });
    }}
  >
    <SelectionGridItemImage
      src={`/images/empresa-uk/accessory/${"Short"} - preview.png`}
      alt={"Bed Lever"}
    />
  </SelectionGridItem>
  <SelectionGridItem
    active={$configStore.liftingPole === "Included"}
    title="Lifting Pole"
    description="The lifting pole can be used by individuals to help with bed mobility."
    learnMoreUrl="/bed-accessories/lifting-pole"
    ukStyle={true}
    onClick={() => {
      configStore.update((s) => {
        return {
          ...s,
          liftingPole:
            s.liftingPole === "Included" ? "Not included" : "Included",
        };
      });
    }}
  >
    <SelectionGridItemImage
      src={`/images/empresa-uk/accessory/Lifting Pole - preview.png`}
      alt={"Lifting Pole"}
    />
  </SelectionGridItem>
  <SelectionGridItem
    active={$configStore.safetyMat === "Included"}
    title="High Safety Mat"
    description="Even-plane safety mat providing an extended surface for individuals who are prone to falling out of bed."
    learnMoreUrl="/bed-accessories/high-safety-mat"
    ukStyle={true}
    onClick={() => {
      configStore.update((s) => {
        return {
          ...s,
          safetyMat: s.safetyMat === "Included" ? "Not included" : "Included",
        };
      });
    }}
  >
    <SelectionGridItemImage
      src={`/images/empresa-uk/accessory/Safety Mat - preview.png`}
      alt={"High Safety Mat"}
    />
  </SelectionGridItem>
  <SelectionGridItem
    active={$configStore.widthAdjustmentKit === "Included"}
    title="Width Adjustment Kit"
    description="Increases the width of a standard bed by 150mm, making it suitable for individuals who need or prefer a wider bed."
    learnMoreUrl="/bed-accessories/width-adjustment-kit"
    ukStyle={true}
    visible={false}
    onClick={() => {
      configStore.update((s) => {
        return {
          ...s,
          widthAdjustmentKit:
            s.widthAdjustmentKit === "Included" ? "Not included" : "Included",
        };
      });
    }}
  >
    <SelectionGridItemImage
      src={`/images/empresa-uk/accessory/Width Adjustment Kit - preview.png`}
      alt={"Width Adjustment Kit"}
    />
  </SelectionGridItem>
  <SelectionGridItem
    active={$configStore.bedWallBumper === "Included"}
    title="Bed Wall Bumper"
    description="Enables users to position the head or footboard of the bed at a fixed distance from the wall."
    learnMoreUrl="/bed-accessories/wall-bumper"
    ukStyle={true}
    visible={false}
    onClick={() => {
      configStore.update((s) => {
        return {
          ...s,
          bedWallBumper:
            s.bedWallBumper === "Included" ? "Not included" : "Included",
        };
      });
    }}
  >
    <SelectionGridItemImage
      src={`/images/empresa-uk/accessory/Bed Wall Bumper - preview.png`}
      alt={"Bed Wall Bumper"}
    />
  </SelectionGridItem>
</SelectionGrid>

<style lang="scss">
</style>
