import 'font-awesome-sass-loader';
import { VoyagerData } from './components/app';
import { VoyagerConfig } from './models/config';
import { SerializableState } from './models/index';
export declare type Container = string | HTMLElement;
/**
 * The Voyager class encapsulates the voyager application and allows for easy
 * instantiation and interaction from non-react projects.
 */
export declare class Voyager {
    private container;
    private config;
    private data;
    private store;
    constructor(container: Container, config: VoyagerConfig, data: VoyagerData);
    /**
     * Update the dataset currently loaded into voyager
     *
     * @param {VoyagerData} data
     *
     * @memberof Voyager
     */
    updateData(data: VoyagerData): void;
    /**
     * Update the configuration of the voyager application.
     *
     * @param {VoyagerConfig} config
     *
     * @memberof Voyager
     */
    updateConfig(config: VoyagerConfig): void;
    /**
     * Apply a vega-lite spec to voyager.
     *
     * @param {VoyagerConfig} config
     *
     * @memberof Voyager
     */
    setSpec(spec: Object): void;
    /**
     * Sets the entire voyager application state. This is useful for restoring
     * the state of the application to a previosly saved state.
     *
     * @param state A StateBase object with the following keys
     *
     * @param state.config
     * @param state.dataset
     * @param state.shelf
     * @param state.result
     *
     * @memberof Voyager
     */
    setApplicationState(state: SerializableState): void;
    /**
     *
     * Gets the current application state.
     *
     * @returns {Readonly<StateBase>}
     *
     * @memberof Voyager
     */
    getApplicationState(): SerializableState;
    /**
     * Subscribe to state changes.
     *
     * This is useful for taking state snapshots to persist and later restore.
     *
     * @param {Function} onChange callback that takes a single state parameter.
     * @returns {Function} unsubscribe, call this function to remove this listener.
     *
     * @memberof Voyager
     */
    onStateChange(onChange: Function): Function;
    /**
     * Initialized the application, and renders it into the target container
     *
     * @private
     *
     * @memberof Voyager
     */
    private init();
    private render(data, config, spec?);
    private renderFromState(state);
}
/**
 * Create an instance of the voyager application.
 *
 * @param {Container} container css selector or HTMLElement that will be the parent
 *                              element of the application
 * @param {Object}    config    configuration options
 * @param {Array}     data      data object. Can be a string or an array of objects.
 */
export declare function CreateVoyager(container: Container, config: Object, data: VoyagerData): Voyager;