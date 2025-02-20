'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">simpleblognestjs documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-d24f42bf655b459eac728bbc7999be6c79b65b3877b1b552a8f43af44447ef2da73419c6911d03f3382c47004b4ed9ebb20b8ccbf9a222b76269ea9c802bdcf7"' : 'data-bs-target="#xs-controllers-links-module-AppModule-d24f42bf655b459eac728bbc7999be6c79b65b3877b1b552a8f43af44447ef2da73419c6911d03f3382c47004b4ed9ebb20b8ccbf9a222b76269ea9c802bdcf7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-d24f42bf655b459eac728bbc7999be6c79b65b3877b1b552a8f43af44447ef2da73419c6911d03f3382c47004b4ed9ebb20b8ccbf9a222b76269ea9c802bdcf7"' :
                                            'id="xs-controllers-links-module-AppModule-d24f42bf655b459eac728bbc7999be6c79b65b3877b1b552a8f43af44447ef2da73419c6911d03f3382c47004b4ed9ebb20b8ccbf9a222b76269ea9c802bdcf7"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-d24f42bf655b459eac728bbc7999be6c79b65b3877b1b552a8f43af44447ef2da73419c6911d03f3382c47004b4ed9ebb20b8ccbf9a222b76269ea9c802bdcf7"' : 'data-bs-target="#xs-injectables-links-module-AppModule-d24f42bf655b459eac728bbc7999be6c79b65b3877b1b552a8f43af44447ef2da73419c6911d03f3382c47004b4ed9ebb20b8ccbf9a222b76269ea9c802bdcf7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-d24f42bf655b459eac728bbc7999be6c79b65b3877b1b552a8f43af44447ef2da73419c6911d03f3382c47004b4ed9ebb20b8ccbf9a222b76269ea9c802bdcf7"' :
                                        'id="xs-injectables-links-module-AppModule-d24f42bf655b459eac728bbc7999be6c79b65b3877b1b552a8f43af44447ef2da73419c6911d03f3382c47004b4ed9ebb20b8ccbf9a222b76269ea9c802bdcf7"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-8c2c510f28b97efc1f0ceb8c6d6f5374acc6a7c1a45e83a023513733061d5c5b34a69dff4334f1f06f778f2a5ebdb3096dede1e8768482426eb5382fb03fb8b8"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-8c2c510f28b97efc1f0ceb8c6d6f5374acc6a7c1a45e83a023513733061d5c5b34a69dff4334f1f06f778f2a5ebdb3096dede1e8768482426eb5382fb03fb8b8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-8c2c510f28b97efc1f0ceb8c6d6f5374acc6a7c1a45e83a023513733061d5c5b34a69dff4334f1f06f778f2a5ebdb3096dede1e8768482426eb5382fb03fb8b8"' :
                                            'id="xs-controllers-links-module-AuthModule-8c2c510f28b97efc1f0ceb8c6d6f5374acc6a7c1a45e83a023513733061d5c5b34a69dff4334f1f06f778f2a5ebdb3096dede1e8768482426eb5382fb03fb8b8"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-8c2c510f28b97efc1f0ceb8c6d6f5374acc6a7c1a45e83a023513733061d5c5b34a69dff4334f1f06f778f2a5ebdb3096dede1e8768482426eb5382fb03fb8b8"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-8c2c510f28b97efc1f0ceb8c6d6f5374acc6a7c1a45e83a023513733061d5c5b34a69dff4334f1f06f778f2a5ebdb3096dede1e8768482426eb5382fb03fb8b8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-8c2c510f28b97efc1f0ceb8c6d6f5374acc6a7c1a45e83a023513733061d5c5b34a69dff4334f1f06f778f2a5ebdb3096dede1e8768482426eb5382fb03fb8b8"' :
                                        'id="xs-injectables-links-module-AuthModule-8c2c510f28b97efc1f0ceb8c6d6f5374acc6a7c1a45e83a023513733061d5c5b34a69dff4334f1f06f778f2a5ebdb3096dede1e8768482426eb5382fb03fb8b8"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-54136c8ff2f29a204b77b393b1bb1acad906e8526c07264aca68c098115c530fd89a68ad2c650e1ba2841e96483bb96d02fa6d056d966f2ef2272d939bdccfc3"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-54136c8ff2f29a204b77b393b1bb1acad906e8526c07264aca68c098115c530fd89a68ad2c650e1ba2841e96483bb96d02fa6d056d966f2ef2272d939bdccfc3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-54136c8ff2f29a204b77b393b1bb1acad906e8526c07264aca68c098115c530fd89a68ad2c650e1ba2841e96483bb96d02fa6d056d966f2ef2272d939bdccfc3"' :
                                            'id="xs-controllers-links-module-PostsModule-54136c8ff2f29a204b77b393b1bb1acad906e8526c07264aca68c098115c530fd89a68ad2c650e1ba2841e96483bb96d02fa6d056d966f2ef2272d939bdccfc3"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-54136c8ff2f29a204b77b393b1bb1acad906e8526c07264aca68c098115c530fd89a68ad2c650e1ba2841e96483bb96d02fa6d056d966f2ef2272d939bdccfc3"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-54136c8ff2f29a204b77b393b1bb1acad906e8526c07264aca68c098115c530fd89a68ad2c650e1ba2841e96483bb96d02fa6d056d966f2ef2272d939bdccfc3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-54136c8ff2f29a204b77b393b1bb1acad906e8526c07264aca68c098115c530fd89a68ad2c650e1ba2841e96483bb96d02fa6d056d966f2ef2272d939bdccfc3"' :
                                        'id="xs-injectables-links-module-PostsModule-54136c8ff2f29a204b77b393b1bb1acad906e8526c07264aca68c098115c530fd89a68ad2c650e1ba2841e96483bb96d02fa6d056d966f2ef2272d939bdccfc3"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-4d5daa743df9714d1b34f1f0ec1d0d2d8db7d6aebdf72973cee7b595768777579aef3435572c24026d5c79e78cbd148d60610d96c08affaf984c2253b8474ff4"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-4d5daa743df9714d1b34f1f0ec1d0d2d8db7d6aebdf72973cee7b595768777579aef3435572c24026d5c79e78cbd148d60610d96c08affaf984c2253b8474ff4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-4d5daa743df9714d1b34f1f0ec1d0d2d8db7d6aebdf72973cee7b595768777579aef3435572c24026d5c79e78cbd148d60610d96c08affaf984c2253b8474ff4"' :
                                            'id="xs-controllers-links-module-UsersModule-4d5daa743df9714d1b34f1f0ec1d0d2d8db7d6aebdf72973cee7b595768777579aef3435572c24026d5c79e78cbd148d60610d96c08affaf984c2253b8474ff4"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-4d5daa743df9714d1b34f1f0ec1d0d2d8db7d6aebdf72973cee7b595768777579aef3435572c24026d5c79e78cbd148d60610d96c08affaf984c2253b8474ff4"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-4d5daa743df9714d1b34f1f0ec1d0d2d8db7d6aebdf72973cee7b595768777579aef3435572c24026d5c79e78cbd148d60610d96c08affaf984c2253b8474ff4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-4d5daa743df9714d1b34f1f0ec1d0d2d8db7d6aebdf72973cee7b595768777579aef3435572c24026d5c79e78cbd148d60610d96c08affaf984c2253b8474ff4"' :
                                        'id="xs-injectables-links-module-UsersModule-4d5daa743df9714d1b34f1f0ec1d0d2d8db7d6aebdf72973cee7b595768777579aef3435572c24026d5c79e78cbd148d60610d96c08affaf984c2253b8474ff4"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptions.html" data-type="entity-link" >CreatePostMetaOptions</a>
                            </li>
                            <li class="link">
                                <a href="classes/createUserDto.html" data-type="entity-link" >createUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamsDtop.html" data-type="entity-link" >GetUsersParamsDtop</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});