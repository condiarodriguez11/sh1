<script lang="ts">
  export let value: string;
  export let name: string;
  export let group: string;
  export let disabled: boolean = false;
</script>

<div class="acc-radio-container" class:disabled>
  <label class="acc-form-label-radio">
    <input
      class="acc-input-radio"
      type="radio"
      bind:group
      {name}
      {value}
      required
      {disabled}
    />
    <span class="acc-custom-radio">
      <span class="acc-checkmark">
        <div class="acc-checkmark_stem" />
        <div class="acc-checkmark_tick" />
      </span>
      <div class="label-desc">
        <slot />
      </div>
    </span>
  </label>
</div>

<style lang="scss" global>
  .acc-radio-container {
    position: relative;
    flex-grow: 1;
  }
  .acc-form-label-radio {
    color: var(--text-primary);
    display: flex;
    align-items: center;
    padding-left: 0;
    width: 100%;
  }

  .acc-input-radio {
    display: none;
  }

  .acc-custom-radio {
    cursor: pointer;
    height: 100%;
    flex-grow: 1;
    padding: calc(1.6rem / var(--root-font-size)) calc(1.6rem / var(--root-font-size));
    font-size: calc(1.4rem / var(--root-font-size));
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    border-radius: var(--radius);
    border: 1px solid var(--border-color);
    flex-shrink: 0;
    transition: 0.2s all;
    color: var(--text-secondary);
    background: var(--bg-primary);
  }

  .label-desc {
    flex-shrink: 1;
    word-wrap: break-word;
    width: calc(100% - calc(4.8rem / var(--root-font-size)));
  }

  .acc-custom-radio .acc-checkmark {
    background: var(--border-color);
  }

  .acc-checkmark {
    display: inline-block;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    border: 1px solid var(--border-color);
    transform: rotate(45deg);
    margin-right: calc(1.6rem / var(--root-font-size));
  }
  .acc-checkmark_stem {
    position: absolute;
    width: 2px;
    height: 9px;
    left: 11px;
    top: 5px;
    border-radius: 1px;
  }

  .acc-checkmark_tick {
    position: absolute;
    width: 5px;
    height: 2px;
    background-color: white;
    left: calc(0.8rem / var(--root-font-size));
    top: calc(1.2rem / var(--root-font-size));
    border-radius: 1px;
  }

  .acc-checkmark_stem,
  .acc-checkmark_tick {
    background-color: var(--primary);
    transition: 0.1s all;
    opacity: 0.3;
  }

  .acc-form-label-radio:hover {
    .acc-custom-radio {
      .acc-checkmark_stem,
      .acc-checkmark_tick {
        opacity: 1;
      }
    }
  }

  .acc-input-radio:checked + .acc-custom-radio {
    border-color: var(--primary);
    .acc-checkmark {
      background: var(--primary);
      border: var(--primary);
    }
    .acc-checkmark_stem,
    .acc-checkmark_tick {
      background: white !important;
      opacity: 1;
    }
  }

  .acc-radio-container.disabled {
    pointer-events: none;
    cursor: not-allowed;
    .label-desc {
      opacity: 0.4;
    }
  }
  .acc-input-radio:disabled + .acc-custom-radio {
    cursor: not-allowed;
    background: var(--bg-secondary);
    border-color: var(--border-color) !important;
    .acc-checkmark {
      background: var(--border-color);
      border: var(--border-color);
    }
  }
</style>
