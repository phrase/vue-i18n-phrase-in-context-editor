export type PhraseConfig = {
    phraseEnabled: boolean;
    baseUrl: string;
    profileUrl: string;
    apiBaseUrl: string;
    oauthEndpointUrl: string;
    helpUrl: string;
    logoUrl: string;
    stylesheetUrl: string;
    version: string;
    priorityLocales: string[];
    projectId: string;
    accountId?: string;
    branch: string;
    ajaxObserver: boolean;
    debugMode: boolean;
    prefix: string;
    suffix: string;
    autoLowercase: boolean;
    useOldICE: boolean;
    forceLocale: boolean;
    loginDialogMessage: string;
    datacenter: 'eu' | 'us';
    autoLogin: {
        perform: boolean;
        email: string;
        password: string;
    };
    sso: {
        enabled: boolean;
        enforced: boolean;
        provider: string;
        identifier: string;
    };
    fullReparse: boolean;
    sanitize?: (content: string)=> string;
    origin: string;
};
