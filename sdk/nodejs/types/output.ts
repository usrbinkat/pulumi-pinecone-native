// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as enums from "../types/enums";

export interface MetaDataConfig {
    indexed?: string[];
}

export interface PineconePodSpec {
    environment: string;
    metaDataConfig?: outputs.MetaDataConfig;
    podType: string;
    pods?: number;
    replicas: number;
    shards?: number;
    sourceCollection?: string;
}

export interface PineconeServerlessSpec {
    cloud: enums.ServerlessSpecCloud;
    region: string;
}

export interface PineconeSpec {
    pod?: outputs.PineconePodSpec;
    serverless?: outputs.PineconeServerlessSpec;
}

