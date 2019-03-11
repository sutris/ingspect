import React, { Component, ComponentType } from "react";

import historyManager from "./history";

/**
 * Subtract keys from one interface from the other.
 *
 * @example
 * interface One { one: string }
 * interface Three { one: string, two: string }
 *
 * type Two = Omit<Three, keyof One>;
 *
 * // The type of Two will be
 * interface Two { two: string }
 */
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/**
 * Remove from T the keys that are in common with K
 */
type Optionalize<T extends K, K> = Omit<T, keyof K>;

export interface WithSearchProps {
  search: (text: string) => void;
}

export function withSearch<T extends WithSearchProps = WithSearchProps>(
  WrappedComponent: ComponentType<T>
) {
  // Create a nice displayName for React Dev Tools.
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  return class ComponentWithSearch extends Component<
    Optionalize<T, WithSearchProps>
  > {
    public static displayName = `withSearch(${displayName})`;

    public render() {
      return <WrappedComponent search={this.search} {...this.props as T} />;
    }

    private search = (text: string) => {
      historyManager.updateHistory("/search", {
        search: text
      });
    };
  };
}

export default withSearch;
