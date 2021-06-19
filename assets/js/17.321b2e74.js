(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{402:function(e,r,t){"use strict";t.r(r);var o=t(10),a=Object(o.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"cip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cip"}},[e._v("#")]),e._v(" CIP")]),e._v(" "),t("blockquote",[t("p",[e._v("Core Improvement Proposal (CIP) describe standards for the Core platform, including core protocol specifications, client APIs, and contract standards.")])]),e._v(" "),t("h2",{attrs:{id:"contributing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[e._v("#")]),e._v(" Contributing")]),e._v(" "),t("p",[e._v("First you can open your proposal under "),t("a",{attrs:{href:"https://github.com/core-coin/cip/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("issues of this repository"),t("OutboundLink")],1),e._v(" as well as discussion in "),t("a",{attrs:{href:"https://cip.coretalk.info",target:"_blank",rel:"noopener noreferrer"}},[e._v("Core ◆ Talk"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"review"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#review"}},[e._v("#")]),e._v(" Review:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"what-is-cip"}},[e._v("What is CIP")])]),e._v(" "),t("li",[t("a",{attrs:{href:"cip-rationale"}},[e._v("CIP rationale")])]),e._v(" "),t("li",[t("a",{attrs:{href:"cip-categories"}},[e._v("CIP categories")])]),e._v(" "),t("li",[t("a",{attrs:{href:"cip-workflow"}},[e._v("CIP workflow")])]),e._v(" "),t("li",[t("a",{attrs:{href:"cip-editors"}},[e._v("CIP editors")])]),e._v(" "),t("li",[t("a",{attrs:{href:"cip-0"}},[e._v("CIP example")])])]),e._v(" "),t("h3",{attrs:{id:"how-to-start"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-start"}},[e._v("#")]),e._v(" How to start:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/core-coin/cip/fork",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fork"),t("OutboundLink")],1),e._v(" this repository.")]),e._v(" "),t("li",[e._v("Change the template "),t("a",{attrs:{href:"https://github.com/core-coin/cip/blob/master/docs/src/doc/cip-0.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("cip-0"),t("OutboundLink")],1),e._v(" and move it to "),t("a",{attrs:{href:"https://github.com/core-coin/cip/blob/master/docs/src/cip",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("cip")]),e._v(" folder"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/core-coin/cip/compare",target:"_blank",rel:"noopener noreferrer"}},[e._v("Submit a Pull Request"),t("OutboundLink")],1),e._v(" to Core's CIP repository.")])]),e._v(" "),t("p",[e._v("Put any graphical content into "),t("a",{attrs:{href:"https://github.com/core-coin/cip/blob/master/docs/src/.vuepress/public/img/cip",target:"_blank",rel:"noopener noreferrer"}},[e._v("CIP image directory"),t("OutboundLink")],1),e._v(" "),t("code",[e._v("/docs/src/.vuepress/public/img/cip/cip-x")]),e._v(" under your cip-x (x is the cip number). You can link images with path "),t("code",[e._v("/img/cip/cip-0/cip-0-1.png")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"cip-tags"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cip-tags"}},[e._v("#")]),e._v(" CIP tags")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Draft")]),e._v(" a CIP that is open for consideration.")]),e._v(" "),t("li",[t("code",[e._v("Accepted")]),e._v(" a CIP that is planned for immediate adoption, i.e. expected to be included in the next hard fork (for Core/Consensus layer CIPs).")]),e._v(" "),t("li",[t("code",[e._v("Final")]),e._v(" a CIP that has been adopted in a previous hard fork (for Core/Consensus layer CIPs).")]),e._v(" "),t("li",[t("code",[e._v("Deferred")]),e._v(" a CIP that is not being considered for immediate adoption. May be reconsidered in the future for a subsequent hard fork.")])]),e._v(" "),t("h2",{attrs:{id:"cip-categories"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cip-categories"}},[e._v("#")]),e._v(" CIP categories")]),e._v(" "),t("p",[e._v("CIPs are separated into a number of types, and each has its own list of CIPs.")]),e._v(" "),t("dl",[t("dt",[e._v("Core")]),e._v("\n\tImprovements requiring a consensus fork, as well as changes that are not necessarily consensus critical but may be relevant to “core dev” discussions.\n\t"),t("dt",[e._v("Networking")]),e._v("\n\tIncludes improvements around devp2p, network protocol specifications of whisper and swarm.\n\t"),t("dt",[e._v("Interface")]),e._v("\n\tIncludes improvements around client API/RPC specifications and standards, and also certain language-level standards like method names and contract ABIs. The label “interface” aligns with the interfaces repo and discussion should primarily occur in that repository before a CIP is submitted to the CIPs repository.\n\t"),t("dt",[e._v("CRC")]),e._v("\n\tApplication-level standards and conventions, including contract standards such as token standards, name registries, URI schemes, library/package formats and wallet formats.\n\t"),t("dt",[e._v("Informational")]),e._v("\n\tDescribes a Core design issue, or provides general guidelines or information to the Core community, but does not propose a new feature. Informational CIPs do not necessarily represent Core community consensus or a recommendation, so users and implementers are free to ignore Informational CIPs or follow their advice.\n\t"),t("dt",[e._v("Meta")]),e._v("\n\tDescribes a process surrounding Core or proposes a change to (or an event in) a process. Process CIPs are like Standards Track CIPs but apply to areas other than the Core protocol itself. They may propose an implementation, but not to Core's codebase; they often require community consensus; unlike Informational CIPs, they are more than recommendations, and users are typically not free to ignore them. Examples include procedures, guidelines, changes to the decision-making process, and changes to the tools or environment used in Core development. Any meta-CIP is also considered a Process CIP.\n")]),e._v(" "),t("h2",{attrs:{id:"channels"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#channels"}},[e._v("#")]),e._v(" Channels")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://cip.coretalk.info",target:"_blank",rel:"noopener noreferrer"}},[e._v("Core ◆ Talk > CIP"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://discord.gg/f7JFPg",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discord"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"feed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#feed"}},[e._v("#")]),e._v(" Feed")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://cip.coreblockchain.cc/rss.xml",target:"_blank",rel:"noopener noreferrer"}},[e._v("RSS"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://cip.coreblockchain.cc/feed.atom",target:"_blank",rel:"noopener noreferrer"}},[e._v("Atom"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://cip.coreblockchain.cc/feed.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("Json"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=a.exports}}]);