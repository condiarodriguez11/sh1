<script lang="ts">
  export let length: number;
  export let title: string;
  export let value: string = "";
  export let targetSelectView: SELECTOR_VIEW;
  import { configStore, SELECTOR_VIEW } from "./configStore";

  $: disabled = !length;

  import IconSafety from "./assets/icon-safety.svg";
  import IconSidePanels from "./assets/icon-sidepanels.svg";
  import IconMobility from "./assets/icon-mobility.svg";
  import IconExtras from "./assets/icon-extras.svg";
  import IconMattress from "./assets/icon-mattress.svg";
  import Chevron from "./assets/chevron.svg";

  export const icons: { [key in SELECTOR_VIEW]: typeof IconSidePanels } = {
    SIDE_RAILS: IconSidePanels,
    SAFETY: IconSafety,
    MOBILITY: IconMobility,
    EXTRAS: IconExtras,
    MATTRESSES: IconMattress,
  };
  const Icon = icons[targetSelectView];
</script>

<div
  class="acc-customization-select"
  class:disabled
  class:active={$configStore.selectorView === targetSelectView}
  on:click={() => {
    if (!disabled) {
      configStore.update((s) => {
        return {
          ...s,
          selectorView:
            s.selectorView === targetSelectView ? null : targetSelectView,
        };
      });
    }
  }}
>
  <div class="acc-customization-icon-container">
    <Icon class="acc-customization-icon-container__icon" />
  </div>

  <div class="acc-customization-content">
    <div class="title">{title}</div>
    {#if value}
      <div class="value">
        {value}
      </div>
    {/if}
  </div>
  <div class="acc-select-container">
    <div class="acc-select-container__sticker">
      {length} options
      <span class="acc-select-container__sticker__available"
        >&nbsp;available</span
      >
    </div>
    <Chevron class="acc-chevron" />
  </div>
</div>

<style lang="scss" global>
  .acc-customization-content {
    overflow: hidden;
    flex-grow: 1;
    flex-shrink: 1;
    padding-right: calc(1.6rem / var(--root-font-size));
    .title {
      font-family: "Poppins Regular", "Poppins";
      font-weight: 400;
      font-size: calc(1.6rem / var(--root-font-size));
    }
    .value {
      font-size: calc(1.4rem / var(--root-font-size));
      flex-grow: 1;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      #acc-floorbed1-uk & {
        font-size: calc(1.6rem / var(--root-font-size));
        font-weight: 300;
      }
    }
  }

  .acc-customization-select {
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--border-color);
    padding-right: calc(1.6rem / var(--root-font-size));
    cursor: pointer;

    &.disabled {
      opacity: 0.5;
    }
    .acc-chevron {
      path {
        fill: var(--primary);
      }
    }
  }
  .acc-customization-icon-container {
    padding: calc(1.6rem / var(--root-font-size));
    flex-shrink: 0;
    display: flex;
    @media screen and (max-width: 1200px) {
      padding-left: 0;
    }
  }

  .acc-customization-select.active {
    .value,
    .title {
      color: var(--primary);
    }

    .acc-chevron {
      transform: rotate(180deg);
    }
    path {
      fill: var(--primary);
    }
  }

  .acc-customization-select:hover {
    .title {
      color: var(--primary);
    }
  }
  .acc-chevron {
    cursor: pointer;
    transition: 0.3s all;
  }

  // select container
  .acc-select-container {
    height: calc(2.4rem / var(--root-font-size));
    flex-grow: 1;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .acc-select-container__sticker {
      background: #f6f6f6;
      border-radius: calc(0.5rem / var(--root-font-size));
      height: 100%;
      pointer-events: none;
      padding: 0 calc(0.8rem / var(--root-font-size));
      right: calc(3.2rem / var(--root-font-size));
      margin-right: calc(1.6rem / var(--root-font-size));

      white-space: nowrap;

      /* 6 options available */

      display: flex;
      align-items: center;

      font-family: "Poppins Regular", "Poppins";
      font-weight: 400;
      font-size: calc(1.2rem / var(--root-font-size));
      line-height: calc(1.6rem / var(--root-font-size));
      text-align: center;

      color: #333232;
      .acc-select-container__sticker__available {
        @media screen and (max-width: 1200px) {
          display: none;
        }
      }
    }
  }
</style>
