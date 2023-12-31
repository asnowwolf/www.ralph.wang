# Github 的用法与礼仪

前一阵国内用户滥用 Issue 的事件已逐渐平息，风波过后，留给我们一些思考：我们该如何参与并回馈这类全球开源社区？

作为一个在 GitHub 浪迹多年的人，我来谈谈自己的心得体会，希望能帮你避免再次踩坑。

## 作为游客

当你访问一个仓库的时候，会遇到三个按钮：Watch（关注） / Star（星标） / Fork（分叉）。

Watch 表示你对这个仓库中发生的事件感兴趣，比如出现了新的 issue 等。当这些事件发生时 GitHub
就会自动给你一个页面通知，并往你的注册邮箱发送一封邮件，当然，你也可以在 通知设置 界面禁止这些通知。当你 watch
很多仓库的时候，通知邮件可能会把你的邮箱塞满，这时候，除了在自己的邮箱设置规则之外，也可以来这里禁用通知。

Star 表示特别标记这个仓库，这和邮箱中的 Star 是一样的。严格意义上，它只是你个人需要经常访问它而进行的快捷标注，这样你就能通过
Your stars 页面（比如我 Star 过的项目）来快速找到这些项目了。它经常被用做表达支持的投票，官方也提倡如此，不过我很少会这么做。

Fork 有两种用途：一种是你要参与它，为它提交代码，这部分我会在稍后的【作为贡献者】部分细讲；另一种是觉得这个仓库可能会被原作者删掉，因此
Fork 出来一份，这样即使作者删掉了，我这里也有一个 Fork 那个时间点的版本的快照。不过要注意，Fork
出来的版本是不会随着原始仓库而自动更新的。理想情况下，后一种情况该算误用，因为已经开源出来的代码原作者是不应该删除的，但是确实有过被删除的情况。所以有时候我会把
Fork 但不打算发 PR 的行为看作是对库作者的不信任投票。当然，大多数的仓库作者可能不会这么想。

## 作为贡献者

贡献的形式有两种：提 issue 和 提 pull request，这两者有一些共同的要求，包括：

认真看并遵循对方给出的 issue 模板 / PR 模板。 及时跟进，当对方有回复时应该尽早给出足够明确的回答。如果觉得对方的答复已经解决了你的问题，或者这个确实不是问题，就及时关闭，不要等作者动手。
大多数仓库都要用英语提，但专门面向中文用户的仓库是例外。其实这一点并没有想象中的那么难，现在的 Google Translate
已经非常强大了，而且 https://translate.google.cn 不用翻墙也能访问，只要写好中文，然后在里面翻译成英文，再修正一下英文翻译就可以了。
接下来我再分别细说一下它们。

提 issue 也就是提问题，可以再细分为两种：提 BUG 和 提需求（Feature Request / Proposal）。

提 BUG 的基本要求是确认它是问题并把问题说清楚。

开源作者都很忙，大多数人都不会有时间跟你来回沟通，不愿意花很长时间却只是为了把问题问清楚。如果最后经过很长时间的尝试之后发现根本不是问题，那作者是会非常失望的 ——
如果不是愤怒的话。

所以，如果你发现了一个问题，请先在心里告诉自己这是“疑似问题”，然后用不同的项目甚至不同的环境来尝试重现它，这些过程你都要记录下来。等你确认了它真的是问题之后，再去提
issue，并且把你的这些尝试过程及其结果和你期待的结果都包含进去。同时，最好把这些尝试过程中的创建项目都上传到 GitHub
上的个人空间，让作者可以直接拿它重现你的问题，而不用自己重建环境。这些工作对作者关注你这个问题并解决它是非常重要的。

另外，如果你只是单纯的不会用，而不是发现了代码本身的 BUG，那么请不要提 issue。因为 issue 并不是用来请教作者的直通车，你应该去
Stackoverflow 之类的专业问答网站提问。很多开源仓库的作者也同时活跃在 Stackoverflow 等问答网站，所以不用担心得不到专业的答复。

提需求的基本要求是要能坦然接受别人的拒绝。

每个开源软件都有自己的发展计划，对于比较火的项目，你提出的特性请求能有 1%
的概率被接受就不错了。你要做的是要尽可能在第一帖中就把这个请求的来龙去脉说清楚，如果发现作者对你的需求有误解，那么可以回帖解释，但不要胡搅蛮缠、强词夺理。如果觉得对方拒绝得有理，请表示感谢并主动关闭你的特性请求。

提 Pull Request（简称 PR）也就是申请往主库中合并代码，是个技术含量较高的工作。

提 PR 的前提是先 Fork 对方的仓库，而不要 clone 下来然后上传到自己的仓库，那样的话 GitHub 没法知道这俩库是同源的。

Fork 之后，你的个人仓库中就有了一个分支仓库，你可以往这个分支仓库中提交代码，觉得达到了 PR 的预定目标之后，就推送它，并回到
GitHub 页面中发起 PR（GitHub 会在页面上主动提示可以发 PR，跟着走就行）。

提 PR
的基本要求是达到对方的代码质量标准。如果对方的仓库单元测试覆盖率很高，那么你也要确保自己提交的代码有足够的测试覆盖率。如果对方要求在代码中使用内联注释来生成文档，那么你也要写好相应的文档注释。如果对方对代码格式的要求很严格，那么你也应该遵循它。当然，较好的开源仓库通常都会有相应的工具进行检查，如果通不过就会标记出来。

如果你这个 PR 已经过时了，那么可以有两种选择：如果对方的新版本已经解决了这个问题，请主动关闭你自己这个；如果仍然有这个问题，请在本地把你的仓库
Rebase 到对方的最新版本，解决了冲突，然后再推送到自己的仓库，你推送完之后，对方的 PR 流中就会自动反应这些更改，而不用你关闭
PR 再重新提起（我提第一个 PR 时就曾干过这样的傻事）。

如果对方回复了你的 PR，要求你做某些修改，如果觉得合理，那就照着修改，觉得不合理，可以继续讨论，阐明你的观点。但通常来说对方比你经验丰富，水平也可能更高，请先仔细思考一下其合理性再回复。

## 作为作者

作为仓库的作者，首先要在仓库中包含一个明确的 LICENSE 文件。

通常代码类的仓库会选择 MIT 等比较开放的协议，如果你是开源狂热者，也可以选择 GPL 等比较激进的协议，但是要注意原则上 GitHub
不允许开放仓库中的代码使用私有/纯商业授权协议。是否法律上不允许我没仔细分析过，不过至少道德上是不允许的。同时，已经用 MIT
等开源协议开源的既有代码在法律上是不允许再闭源的，也就是不能溯及既往。比如你的 1.0 是 MIT 协议，那么别人就可以永远按照 MIT
来使用 1.0 版本的代码，但是你可以把 2.0 改成别的协议甚至退出开源（GPL是例外，一旦开放永不关闭）。不过即使如此，别人也仍然可以按照
MIT 来随意使用 1.0 的代码。

文档类的仓库通常会选择 CC 或 CC-BY-NC 协议，两者的区别是前者允许商用，后者不允许商用或商用时需单独授权。

其次，要提供 CONTRIBUTING.md 贡献指南等辅助文件，指导开发者如何做出贡献。如果你要为 issue 和 PR 提供模板，可以在仓库中包含一个
.github/ISSUE_TEMPLATE.md 和 .github/PULL_REQUEST_TEMPLATE.md 文件，这样别人要参与时就会先看到这个模板中的内容，避免他们误用。

最后，如果已经对外宣传或者有很多人关注了，就不要轻易弃坑，要坚持下去，如果实在坚持不下去了，请移交给别人。这是开源作者的责任。当然，没有推广过的尝试性项目不必受此限制。不过，除非万不得已（比如安全问题），否则不要删除你已经开源的仓库，那样做很不礼貌，必要时你可以废弃它，并写一个
README 来告诉读者去哪里找搬家后的版本。

## 结语

记住：开源是一种信仰，而不是应聘的敲门砖或者赚 KPI 的工具。非要那么做固然也不是不可以，但请别忘了初心，一旦有条件了，就要用各种形式回馈开源社区，这才是开源社区繁荣的根本。
