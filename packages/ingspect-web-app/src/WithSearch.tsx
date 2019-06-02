import { History } from "history";
import React, { Component, ComponentType } from "react";

import { updateHistory } from "./utils/history";

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

export interface WithSearchInjectedProps {
  search: (text: string) => void;
}

interface WithSearchRequiredWrappedComponentProps
  extends WithSearchInjectedProps {
  history: History;
}

export function withSearch<T extends WithSearchRequiredWrappedComponentProps>(
  WrappedComponent: ComponentType<T>
) {
  // Create a nice displayName for React Dev Tools.
  const displayName = WrappedComponent.displayName || WrappedComponent.name;

  return class ComponentWithSearch extends Component<
    Optionalize<T, WithSearchInjectedProps>
  > {
    public static displayName = `withSearch(${displayName})`;

    public render() {
      return <WrappedComponent search={this.search} {...this.props as T} />;
    }

    private search = (text: string) => {
      updateHistory(this.props.history, "/search", {
        search: text
      });
    };
  };
}

export default withSearch;
