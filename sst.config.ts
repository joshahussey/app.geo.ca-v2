import type { SSTConfig } from 'sst';
import { SvelteKitSite, Config, Bucket, Table } from 'sst/constructs';
import * as cdk from 'aws-cdk-lib';

export default {
	config(_input) {
		return {
			name: 'app-geo-ca-v2',
			region: 'ca-central-1'
		};
	},
	stacks(app) {
		app.stack(function Site({ stack }) {
			const OIDC_CLIENT_ID = new Config.Parameter(stack, 'OIDC_CLIENT_ID', {
				value: process.env.OIDC_CLIENT_ID
			});
			const COGNITO_USERPOOL_ID = new Config.Parameter(stack, 'COGNITO_USERPOOL_ID', {
				value: process.env.COGNITO_USERPOOL_ID
			});
			const OIDC_CLIENT_SECRET = new Config.Secret(stack, 'OIDC_CLIENT_SECRET');
			const OIDC_CUSTOM_DOMAIN = new Config.Parameter(stack, 'OIDC_CUSTOM_DOMAIN', {
				value: process.env.OIDC_CUSTOM_DOMAIN
			});
			const GEOCORE_API_DOMAIN = new Config.Parameter(stack, 'GEOCORE_API_DOMAIN', {
				value: process.env.GEOCORE_API_DOMAIN
			});
			const GEOCORE_BUCKET = new Bucket(stack, 'geocore', {
				cdk: {
					bucket: {
						autoDeleteObjects: true,
						removalPolicy: cdk.RemovalPolicy.DESTROY
					}
				}
			});
			const USER_TABLE = new Table(stack, 'users', {
				fields: {
					uuid: 'string'
				},
				primaryIndex: { partitionKey: 'uuid' }
			});

			const site = new SvelteKitSite(stack, 'site', {
				path: "web-app",
				bind: [
					OIDC_CLIENT_ID,
					COGNITO_USERPOOL_ID,
					OIDC_CLIENT_SECRET,
					OIDC_CUSTOM_DOMAIN,
					GEOCORE_API_DOMAIN,
					GEOCORE_BUCKET,
					USER_TABLE
				]
			});

			stack.addOutputs({
				url: site.url
			});
		});
	}
} satisfies SSTConfig;
