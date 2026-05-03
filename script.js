
(function () {
    window.shark_cloud_plugin_scripts_config = 
    [
     {
         name: '五庄观仙果盛会活动',
         actions: [
             {
                 name: '领取每日封神气韵',
                 request_url: 'exchange',
                 success_message: '获得封神气韵x20',
                 success_error: '领取每日免费气韵失败',
                 hasPackageReturn: true,
                 type: 'nc',
                 data: {
                     id: 4001,
                     num: 1,
                     act: 2406002,
                     uinY: 'player.uin',
                     uIdx: 'player.uin',
                 }
             },
            {
                 name: '领取每日签任务奖励',
                 request_url: 'exchange',
                 success_message: '草还丹x5',
                 success_error: '领取每日签到任务奖励失败',
                 hasPackageReturn: true,
                 type: 'nc',
                 data: {
                     id: 23150206,
                     act: 2404002,
                     uinY: 'player.uin',
                     uIdx: 'player.uin',
                 }
            },
               {
                 name: '领取竞技场pvp任务奖励',
                 request_url: 'exchange',
                 success_message: '草还丹x5',
                 success_error: '领取竞技场pvp奖励失败',
                 hasPackageReturn: true,
                 type: 'nc',
                 data: {
                     id: 23150208,
                     act: 2404002,
                     uinY: 'player.uin',
                     uIdx: 'player.uin',
                 }
            },
             {
                 name: '领取庭院赠礼任务奖励',
                 request_url: 'exchange',
                 success_message: '草还丹x5',
                 success_error: '领取庭院赠礼任务奖励失败',
                 hasPackageReturn: true,
                 type: 'nc',
                 data: {
                     id: 23150209,
                     act: 2404002,
                     uinY: 'player.uin',
                     uIdx: 'player.uin',
                 }
            },
            {
                 name: '领取每日获取草还丹15任务奖励',
                 request_url: 'exchange',
                 success_message: '草还丹x5',
                 success_error: '领取每日获取草还丹15任务失败',
                 hasPackageReturn: true,
                 type: 'nc',
                 data: {
                     id: 23150207,
                     act: 2404002,
                     uinY: 'player.uin',
                     uIdx: 'player.uin',
                 }
            },
            {
                 name: '领取每日获晶钻充值任务奖励',
                 request_url: 'exchange',
                 success_message: '草还丹x5',
                 success_error: '领取每日获晶钻充值任务奖励失败',
                 hasPackageReturn: true,
                 type: 'nc',
                 data: {
                     id: 23150210,
                     act: 2404002,
                     uinY: 'player.uin',
                     uIdx: 'player.uin',
                 }
            },
         ]
     }
 
 ];
 })()
 
 // https://gitee.com/jflyhak/shark_plugins/raw/develop/动态脚本/src/script.js
 
