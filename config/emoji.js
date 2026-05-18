export const emoji = {
        check: '<:check:0>',
        cross: '<:cross:0>',
        info:  '<:info:0>',
        lock:  '<:lock:0>',
        warn:  '<:warn:0>',
        home: '<:home:1505973518339145899>',

        chart:    '📊',
        scroll:   '📜',
        members:  '👥',
        gem:      '💎',
        folder:   '📁',
        calendar: '📆',

        news:       '<:news:1505973522466345081>',
        arrow:      '<:arrow:1505973526040150100>',
        invite:     '<:invite:1505973531148685322>',
        msg:        '<:msg:1505973534785015981>',
        giveaway:   '<:giveaway:1505973538522271889>',
        greet:      '<:greet:1505973544218001578>',
        timer:      '<:timer:1505973548903301281>',
        moderation: '<:moderation:1505973552833368185>',
        poll:       '<:poll:1505973557145112718>',
        utility:    '<:utility:1505973559217094718>',
        contact:    '<:contact:1505973563981828258>',

        tick:         '<:tick:1505973568758874253>',
        shard_online: '<:online:1505973573418750093>',

        timer_clock:      '<a:TimeClock:1505973578821013544>',
        timer_animated:   '<a:timer_animated:1505973583841726606>',
        timer_ringing:    '<a:ringing_clock:1505973589080277012>',
        timer_alarm:      '<a:alarm_clock:1505973597229809786>',
        timer_roll:       '<a:roll:1505973600979652802>',
        timer_play_pause: '<a:play_pause:1505973608185335818>',

        giveaway_gift:  '<a:Gift:1505973612069261404>',
        giveaway_dot:   '<:dot:1505973616112828609>',
        giveaway_react: '<:Gway:1505973619988369498>',

        invites:    '<:invites:1505973624404971574>',

        lb_back:    '<:lb_back:1505973629006118952>',
        lb_prev:    '<:lb_prev:1505973633032392805>',
        lb_stop:    '<:lb_stop:1505973636950134784>',
        lb_next:    '<:lb_next:1505973641593094262>',
        lb_forward: '<:lb_forward:1505973645493670019>',

        get(name, fallback = '') {
                return this[name] || fallback;
        },

        parse(key) {
                const str = this[key];
                if (!str) return null;
                const m = str.match(/^<(a?):([^:]+):(\d+)>$/);
                if (!m) return null;
                return { animated: m[1] === 'a', name: m[2], id: m[3] };
        },
};

export default emoji;
