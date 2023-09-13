$(function() {
    /chrome/i.test(navigator.userAgent) && (HTMLInputElement.prototype.brokenSelectFunction = HTMLInputElement.prototype.select,
    HTMLInputElement.prototype.select = function() {
        var t;
        setTimeout((t = this,
        function() {
            t.brokenSelectFunction()
        }
        ), 10)
    }
    );
    for (var i = ["hex", "rgb", "rgba", "prgb", "prgba", "hsl", "hsla", "cmyk", "hsb", "lab", "xyz"], l = ($("#cc_type").on("change keyup", function() {
        if (function(t, a) {
            var e = "";
            for (e in a)
                if (a[e] == t)
                    return 1
        }($("#cc_type").val(), i))
            for (var t = 0, a = i.length; t < a; t++)
                i[t] != $("#cc_type").val() ? $("#cc_" + i[t]).hide() : $("#cc_" + i[t]).show()
    }),
    []), t = 0, a = i.length; t < a; t++)
        l[i[t]] = $("#cc_" + i[t]).find("input");
    function c(t) {
        for (var t = void 0 !== t ? t : $("#cc_type").val(), a = [], e = 0, n = l[t].length; e < n; e++)
            a[e] = $(l[t][e]).val();
        var r = function(t, a) {
            function e(t, a, e) {
                return "NaN" != t && a <= t && t <= e
            }
            function n(t) {
                return parseFloat(t)
            }
            var r, c, o, i, l, s, d, p, h, u, f, g, v, _, m, b, M, x, y, w;
            switch (a) {
            case "hex":
                1 != t.length || !(w = t[0].match(new RegExp("^#?([0-9a-fA-F]{3,6})$"))) || 3 != w[1].length && 6 != w[1].length || (o = z(c = k(r = w[1])),
                i = D(c),
                l = L(c),
                s = N(c),
                p = A(d = S(c)),
                h = q(c),
                f = O(u = E(c)),
                g = F(c));
                break;
            case "rgb":
                3 == t.length && (t[0] = parseInt(t[0]),
                t[1] = parseInt(t[1]),
                t[2] = parseInt(t[2]),
                e(t[0], 0, 255) && e(t[1], 0, 255) && e(t[2], 0, 255) && (i = D(c = [t[0], t[1], t[2]]),
                o = z(c),
                l = L(c),
                r = C(c),
                s = N(c),
                p = A(d = S(c)),
                h = q(c),
                f = O(u = E(c)),
                g = F(c)));
                break;
            case "rgba":
                4 == t.length && (t[0] = parseInt(t[0]),
                t[1] = parseInt(t[1]),
                t[2] = parseInt(t[2]),
                e(t[0], 0, 255) && e(t[1], 0, 255) && e(t[2], 0, 255) && (t[3] = n(t[3]) || 1,
                1 < t[3] ? t[3] = 1 : t[3] < 0 && (t[3] = 0),
                i = D(c = P(o = [t[0], t[1], t[2], t[3]])),
                l = [I((w = o)[0] / 2.55), I(w[1] / 2.55), I(w[2] / 2.55), w[3]],
                r = C(c),
                s = N(c),
                d = S(c),
                p = X(o),
                h = q(c),
                f = O(u = E(c)),
                g = F(c)));
                break;
            case "prgb":
                3 == t.length && (t[0] = n(t[0]),
                t[1] = n(t[1]),
                t[2] = n(t[2]),
                e(t[0], 0, 100) && e(t[1], 0, 100) && e(t[2], 0, 100) && (w = i = [t[0], t[1], t[2]],
                o = z(c = [Math.round(2.55 * w[0]), Math.round(2.55 * w[1]), Math.round(2.55 * w[2])]),
                l = L(c),
                r = C(c),
                s = N(c),
                p = A(d = S(c)),
                h = q(c),
                f = O(u = E(c)),
                g = F(c)));
                break;
            case "prgba":
                4 == t.length && (t[0] = n(t[0]),
                t[1] = n(t[1]),
                t[2] = n(t[2]),
                e(t[0], 0, 100) && e(t[1], 0, 100) && e(t[2], 0, 100) && (t[3] = n(t[3]) || 1,
                1 < t[3] ? t[3] = 1 : t[3] < 0 && (t[3] = 0),
                w = l = [t[0], t[1], t[2], t[3]],
                i = D(c = P(o = [Math.round(2.55 * w[0]), Math.round(2.55 * w[1]), Math.round(2.55 * w[2]), w[3]])),
                r = C(c),
                s = N(c),
                d = S(c),
                p = X(o),
                h = q(c),
                f = O(u = E(c)),
                g = F(c)));
                break;
            case "hsl":
                3 == t.length && (t[0] = parseInt(t[0]),
                t[1] = n(t[1]),
                t[2] = n(t[2]),
                e(t[0], 0, 360) && e(t[1], 0, 100) && e(t[2], 0, 100) && (o = z(c = T(d = [t[0], t[1], t[2]])),
                i = D(c),
                l = L(c),
                s = N(c),
                r = C(c),
                p = A(d),
                h = q(c),
                f = O(u = E(c)),
                g = F(c)));
                break;
            case "hsla":
                4 == t.length && (t[0] = parseInt(t[0]),
                t[1] = n(t[1]),
                t[2] = n(t[2]),
                e(t[0], 0, 360) && e(t[1], 0, 100) && e(t[2], 0, 100) && (t[3] = n(t[3]) || 1,
                1 <= t[3] ? t[3] = 1 : t[3] <= 0 && (t[3] = 0),
                (y = T(w = p = [t[0], t[1], t[2], t[3]])).push(w[3]),
                d = S(c = P(o = y)),
                i = D(c),
                l = L(c),
                s = N(c),
                r = C(c),
                h = q(c),
                f = O(u = E(c)),
                g = F(c)));
                break;
            case "cmyk":
                4 == t.length && (t[0] = n(t[0]),
                t[1] = n(t[1]),
                t[2] = n(t[2]),
                t[3] = n(t[3]),
                e(t[0], 0, 100) && e(t[1], 0, 100) && e(t[2], 0, 100) && e(t[3], 0, 100) && (y = (w = g = [t[0], t[1], t[2], t[3]])[0] / 100,
                M = w[1] / 100,
                x = w[2] / 100,
                w = w[3] / 100,
                y = 1 - Math.min(1, y * (1 - w) + w),
                M = 1 - Math.min(1, M * (1 - w) + w),
                x = 1 - Math.min(1, x * (1 - w) + w),
                r = C(c = [Math.round(255 * y), Math.round(255 * M), Math.round(255 * x)]),
                o = z(c),
                i = D(c),
                l = L(c),
                s = N(c),
                p = A(d = S(c)),
                h = q(c),
                f = O(u = E(c))));
                break;
            case "hsb":
                3 == t.length && (t[0] = parseInt(t[0]),
                t[1] = n(t[1]),
                t[2] = n(t[2]),
                e(t[0], 0, 360) && e(t[1], 0, 100) && e(t[2], 0, 100) && (y = (w = h = [t[0], t[1], t[2]])[0] / 60,
                M = w[1] / 100,
                x = w[2] / 100,
                w = Math.floor(y) % 6,
                m = 255 * x * (1 - M),
                b = 255 * x * (1 - M * (y -= Math.floor(y))),
                M = 255 * x * (1 - M * (1 - y)),
                x *= 255,
                0 == w ? _ = [x, M, m] : 1 == w ? _ = [b, x, m] : 2 == w ? _ = [m, x, M] : 3 == w ? _ = [m, b, x] : 4 == w ? _ = [M, m, x] : 5 == w && (_ = [x, m, b]),
                r = C(c = [Math.round(_[0]), Math.round(_[1]), Math.round(_[2])]),
                o = z(c),
                i = D(c),
                l = L(c),
                s = N(c),
                p = A(d = S(c)),
                f = O(u = E(c)),
                g = F(c)));
                break;
            case "xyz":
                3 == t.length && (t[0] = n(t[0]),
                t[1] = n(t[1]),
                t[2] = n(t[2]),
                e(t[0], 0, 95.05) && e(t[1], 0, 100) && e(t[2], 0, 108.88) && (r = C(c = H(u = [t[0], t[1], t[2]])),
                o = z(c),
                i = D(c),
                l = L(c),
                s = N(c),
                p = A(d = S(c)),
                g = F(c),
                h = q(c),
                f = O(u)));
                break;
            case "lab":
                3 == t.length && (t[0] = n(t[0]),
                t[1] = n(t[1]),
                t[2] = n(t[2]),
                e(t[0], 0, 100) && e(t[1], -128, 128) && e(t[2], -128, 128) && (M = (y = f = [t[0], t[1], t[2]])[0],
                w = y[1],
                x = y[2],
                m = M <= 8 ? (v = 100 * M / 903.3) / 100 * 7.787 + 16 / 116 : (v = 100 * Math.pow((M + 16) / 116, 3),
                Math.pow(v / 100, 1 / 3)),
                b = 95.047 * Math.pow(w / 500 + m, 3),
                _ = 108.883 * Math.pow(m - x / 200, 3),
                r = C(c = H(u = [I(b), I(v), I(_)])),
                o = z(c),
                i = D(c),
                l = L(c),
                s = N(c),
                p = A(d = S(c)),
                g = F(c),
                h = q(c)))
            }
            return !!r && {
                type: a,
                hex: [r],
                rgb: c,
                rgba: o,
                prgb: i,
                prgba: l,
                websafe: s,
                hsl: d,
                hsla: p,
                cmyk: g,
                hsb: h,
                xyz: u,
                lab: f
            }
        }(a, t);
        if (r) {
            for (t = r.type,
            e = 0,
            n = i.length; e < n; e++) {
                for (var c = 0, o = l[i[e]].length; c < o; c++)
                    i[e] != t && $(l[i[e]][c]).val(r[i[e]][c]);
                l[i[e]] = $("#cc_" + i[e]).find("input")
            }
            $("#cc_color").css("background", "#" + r.hex[0]),
            $("#cc_item_hex").val("#" + r.hex[0]),
            $("#cc_item_websafe").val("#" + r.websafe),
            $("#cc_item_rgb").val("rgb(" + r.rgb[0] + ", " + r.rgb[1] + ", " + r.rgb[2] + ");"),
            $("#cc_item_rgba").val("rgba(" + r.rgba[0] + ", " + r.rgba[1] + ", " + r.rgba[2] + ", " + r.rgba[3] + ");"),
            $("#cc_item_prgb").val("rgb(" + r.prgb[0] + "%, " + r.prgb[1] + "%, " + r.prgb[2] + "%);"),
            $("#cc_item_prgba").val("rgb(" + r.prgba[0] + "%, " + r.prgba[1] + "%, " + r.prgba[2] + "%, " + r.prgba[3] + ");"),
            $("#cc_item_hsl").val("hsl(" + r.hsl[0] + ", " + r.hsl[1] + "%, " + r.hsl[2] + "%);"),
            $("#cc_item_hsla").val("hsla(" + r.hsla[0] + ", " + r.hsla[1] + "%, " + r.hsla[2] + "%, " + r.hsla[3] + ");"),
            $("#cc_item_hsb").val(r.hsb[0] + ", " + r.hsb[1] + "%, " + r.hsb[2] + "%"),
            $("#cc_item_xyz").val(r.xyz[0] + ", " + r.xyz[1] + ", " + r.xyz[2]),
            $("#cc_item_lab").val(r.lab[0] + ", " + r.lab[1] + ", " + r.lab[2]),
            $("#cc_item_cmyk").val(r.cmyk[0] + "%, " + r.cmyk[1] + "%, " + r.cmyk[2] + "%, " + r.cmyk[3] + "%")
        } else {
            for ($("#cc_color").css("background-image", "url(/img/grid16.png)"),
            e = 0,
            n = i.length; e < n; e++)
                $("#cc_item_" + i[e]).val("");
            $("#cc_item_websafe").val("")
        }
    }
    function I(t, a, e) {
        var n, r, c;
        if (9 < (a = (a = parseInt($("#cc_precision").val())) < 0 ? 0 : a) && (a = 9),
        a |= 0,
        r = (t *= a = Math.pow(10, a)) % 1 == .5 * (c = 0 < t | -(t < 0)),
        n = Math.floor(t),
        r)
            switch (e) {
            case "PHP_ROUND_HALF_DOWN":
                t = n + (c < 0);
                break;
            case "PHP_ROUND_HALF_EVEN":
                t = n + n % 2 * c;
                break;
            case "PHP_ROUND_HALF_ODD":
                t = n + !(n % 2);
                break;
            default:
                t = n + (0 < c)
            }
        return (r ? t : Math.round(t)) / a
    }
    function k(t) {
        if ((t = r = 3 == (r = t = "#" === t.charAt(0) ? t.substr(1) : t).length ? r.charAt(0) + r.charAt(0) + r.charAt(1) + r.charAt(1) + r.charAt(2) + r.charAt(2) : r).length < 3 || 6 < t.length)
            return !1;
        var a, e, n, r = t.split("");
        if (2 === t.length)
            n = e = a = parseInt(r[0].toString() + r[1].toString(), 16);
        else if (3 === t.length)
            a = parseInt(r[0].toString(), 16),
            e = parseInt(r[1].toString(), 16),
            n = parseInt(r[2].toString(), 16);
        else {
            if (6 !== t.length)
                return !1;
            a = parseInt(r[0].toString() + r[1].toString(), 16),
            e = parseInt(r[2].toString() + r[3].toString(), 16),
            n = parseInt(r[4].toString() + r[5].toString(), 16)
        }
        return [a, e, n]
    }
    function C(t) {
        var a = Math.max(Math.min(parseInt(t[0], 10), 255), 0)
          , e = Math.max(Math.min(parseInt(t[1], 10), 255), 0)
          , t = Math.max(Math.min(parseInt(t[2], 10), 255), 0);
        return (a = 15 < a ? a.toString(16) : "0" + a.toString(16)) + (e = 15 < e ? e.toString(16) : "0" + e.toString(16)) + (15 < t ? t.toString(16) : "0" + t.toString(16))
    }
    function S(t) {
        var a, e, n = Math.max(Math.min(parseInt(t[0], 10) / 255, 1), 0), r = Math.max(Math.min(parseInt(t[1], 10) / 255, 1), 0), t = Math.max(Math.min(parseInt(t[2], 10) / 255, 1), 0), c = Math.max(n, r, t), o = Math.min(n, r, t), i = (c + o) / 2;
        return c !== o ? (a = c - o,
        e = .5 < i ? a / (2 - c - o) : a / (c + o),
        a = c === n ? (r - t) / a + (r < t ? 6 : 0) : c === r ? (t - n) / a + 2 : (n - r) / a + 4,
        a /= 6) : a = e = 0,
        [Math.round(360 * a), I(100 * e), I(100 * i)]
    }
    function T(t) {
        var a, e, n, r, c, o = Math.max(Math.min(parseInt(t[0], 10), 360), 0) / 360, i = Math.max(Math.min(parseInt(t[1], 10), 100), 0) / 100, l = (t = Math.max(Math.min(parseInt(t[2], 10), 100), 0) / 100) <= .5 ? t * (1 + i) : t + i - t * i;
        if (0 == l)
            return [0, 0, 0];
        switch (e = l * ((l - (a = 2 * t - l)) / l) * ((o *= 6) - (i = Math.floor(o))),
        i) {
        case 1:
            n = l - e,
            r = l,
            c = a;
            break;
        case 2:
            r = l,
            c = (n = a) + e;
            break;
        case 3:
            n = a,
            r = l - e,
            c = l;
            break;
        case 4:
            n = a + e,
            r = a,
            c = l;
            break;
        case 5:
            r = a,
            c = (n = l) - e;
            break;
        default:
            n = l,
            r = a + e,
            c = a
        }
        return [Math.round(255 * n), Math.round(255 * r), Math.round(255 * c)]
    }
    function q(t) {
        var a, e, n, r, c = t[0] / 255, o = t[1] / 255, t = t[2] / 255, i = Math.max(c, o, t), l = i - Math.min(c, o, t), s = function(t) {
            return (i - t) / 6 / l + .5
        };
        return 0 == l ? n = r = 0 : (r = l / i,
        a = s(c),
        e = s(o),
        s = s(t),
        c === i ? n = s - e : o === i ? n = 1 / 3 + a - s : t === i && (n = 2 / 3 + e - a),
        n < 0 ? n += 1 : 1 < n && --n),
        [Math.round(360 * n), I(100 * r), I(100 * i)]
    }
    function E(t) {
        var a = t[0] / 255
          , e = t[1] / 255
          , t = t[2] / 255
          , n = .2126 * (a = .04045 < a ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92) + .7152 * (e = .04045 < e ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .0722 * (t = .04045 < t ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92)
          , r = .0193 * a + .1192 * e + .9505 * t;
        return [I(100 * (.4124 * a + .3576 * e + .1805 * t)), I(100 * n), I(100 * r)]
    }
    function H(t) {
        var a = t[0] / 100
          , e = t[1] / 100
          , n = -.9689 * a + 1.8758 * e + .0415 * (t = t[2] / 100)
          , r = .0557 * a + -.204 * e + 1.057 * t
          , a = .0031308 < (a = 3.2406 * a + -1.5372 * e + -.4986 * t) ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : 12.92 * a
          , n = .0031308 < n ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n
          , r = .0031308 < r ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : 12.92 * r
          , a = Math.min(Math.max(0, a), 1);
        return n = Math.min(Math.max(0, n), 1),
        r = Math.min(Math.max(0, r), 1),
        [Math.round(255 * a), Math.round(255 * n), Math.round(255 * r)]
    }
    function N(t) {
        var a = t[0]
          , e = t[1]
          , t = t[2]
          , n = 25 < (n = a % 51) ? a + 51 - n : a - n
          , a = r(Math.round(n / 17))
          , n = 25 < (n = e % 51) ? e + 51 - n : e - n
          , e = r(Math.round(n / 17));
        return n = 25 < (n = t % 51) ? t + 51 - n : t - n,
        a + e + r(Math.round(n / 17));
        function r(t) {
            return 15 == t ? "F" : 14 == t ? "E" : 13 == t ? "D" : 12 == t ? "C" : 11 == t ? "B" : 10 == t ? "A" : "" + t
        }
    }
    function P(t) {
        var a = [255, 255, 255];
        return t[3] < 1 && (a = k($("#cc_bg_input").val())),
        [Math.round((1 - t[3]) * a[0] + t[3] * t[0]), Math.round((1 - t[3]) * a[1] + t[3] * t[1]), Math.round((1 - t[3]) * a[2] + t[3] * t[2])]
    }
    function z(t) {
        return [t[0], t[1], t[2], 1]
    }
    function D(t) {
        return [I(t[0] / 2.55), I(t[1] / 2.55), I(t[2] / 2.55)]
    }
    function L(t) {
        return [I(t[0] / 2.55), I(t[1] / 2.55), I(t[2] / 2.55), 1]
    }
    function A(t) {
        return t.push(1),
        t
    }
    function X(t) {
        var a = S(t);
        return a.push(t[3]),
        a
    }
    function O(t) {
        var a = t[0]
          , e = t[1]
          , t = t[2];
        return e /= 100,
        t /= 108.883,
        a = 500 * ((a = .008856 < (a /= 95.047) ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116) - (e = .008856 < e ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116)),
        t = 200 * (e - (.008856 < t ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116)),
        [I(116 * e - 16), I(a), I(t)]
    }
    function F(t) {
        var a = t[0] / 255
          , e = t[1] / 255
          , t = t[2] / 255
          , n = Math.min(1 - a, 1 - e, 1 - t)
          , e = (1 - e - n) / (1 - n)
          , t = (1 - t - n) / (1 - n);
        return [I((1 - a - n) / (1 - n) * 100 || 0), I(100 * e || 0), I(100 * t || 0), I(100 * n || 1)]
    }
    $(".cc_input input").on("input keyup", function() {
        c()
    }),
    $("#cc_precision").change(function() {
        c()
    }),
    $("#cc_color").cp({
        layout: "hex",
        submit: 0,
        colorScheme: "dark",
        color: {
            h: 360,
            s: 0,
            b: 0
        },
        onBeforeShow: function() {
            $(".cp_hex").removeClass("cp_cc_bg"),
            $(".cp_new_color").removeClass("cp_cc_bg"),
            $(".cp_hex_field").removeClass("cp_cc_bg")
        },
        onChange: function(t, a, e, n, r) {
            $("#cc_color").css("background", "#" + a),
            $("#cc_hex_0").val(a),
            c("hex")
        }
    }),
    $("#cc_bgcolor").cp({
        layout: "hex",
        submit: 0,
        colorScheme: "dark",
        color: {
            h: 360,
            s: 0,
            b: 100
        },
        onBeforeShow: function() {
            $(".cp_hex").addClass("cp_cc_bg"),
            $(".cp_new_color").addClass("cp_cc_bg"),
            $(".cp_hex_field").addClass("cp_cc_bg")
        },
        onChange: function(t, a, e, n, r) {
            $("#cc_bgcolor").css("background-color", "#" + a),
            $("#cc_bg_input").val(a),
            c()
        }
    })
}),
function(o) {
    var t = {
        showEvent: "click",
        onShow: function() {},
        onBeforeShow: function() {},
        onHide: function() {},
        onChange: function() {},
        onSubmit: function() {},
        colorScheme: "light",
        color: "3289c7",
        livePreview: !0,
        flat: !1,
        layout: "full",
        submit: 1,
        submitText: "OK",
        height: 156
    }
      , i = function(t, a) {
        t = q(t),
        o(a).data("cp").fields.eq(1).val(t.r).end().eq(2).val(t.g).end().eq(3).val(t.b).end()
    }
      , l = function(t, a) {
        o(a).data("cp").fields.eq(4).val(Math.round(t.h)).end().eq(5).val(Math.round(t.s)).end().eq(6).val(Math.round(t.b)).end()
    }
      , s = function(t, a) {
        o(a).data("cp").fields.eq(0).val(H(t))
    }
      , d = function(t, a) {
        o(a).data("cp").selector.css("backgroundColor", "#" + H({
            h: t.h,
            s: 100,
            b: 100
        })),
        o(a).data("cp").selectorIndic.css({
            left: parseInt(o(a).data("cp").height * t.s / 100, 10),
            top: parseInt(o(a).data("cp").height * (100 - t.b) / 100, 10)
        })
    }
      , p = function(t, a) {
        o(a).data("cp").hue.css("top", parseInt(o(a).data("cp").height - o(a).data("cp").height * t.h / 360, 10))
    }
      , h = function(t, a) {
        o(a).data("cp").currentColor.css("backgroundColor", "#" + H(t))
    }
      , u = function(t, a) {
        o(a).data("cp").newColor.css("backgroundColor", "#" + H(t))
    }
      , f = function(t) {
        if (t = o(this).parent().parent(),
        0 < this.parentNode.className.indexOf("_hex")) {
            var a = t.data("cp")
              , e = this.value
              , n = 6 - e.length;
            if (0 < n) {
                for (var r = [], c = 0; c < n; c++)
                    r.push("0");
                r.push(e),
                e = r.join("")
            }
            a.color = a = S(e),
            i(a, t.get(0)),
            l(a, t.get(0))
        } else
            0 < this.parentNode.className.indexOf("_hsb") ? (t.data("cp").color = a = k({
                h: parseInt(t.data("cp").fields.eq(4).val(), 10),
                s: parseInt(t.data("cp").fields.eq(5).val(), 10),
                b: parseInt(t.data("cp").fields.eq(6).val(), 10)
            }),
            i(a, t.get(0)),
            s(a, t.get(0))) : (a = t.data("cp"),
            e = parseInt(t.data("cp").fields.eq(1).val(), 10),
            n = parseInt(t.data("cp").fields.eq(2).val(), 10),
            r = parseInt(t.data("cp").fields.eq(3).val(), 10),
            e = {
                r: Math.min(255, Math.max(0, e)),
                g: Math.min(255, Math.max(0, n)),
                b: Math.min(255, Math.max(0, r))
            },
            a.color = a = T(e),
            s(a, t.get(0)),
            l(a, t.get(0)));
        d(a, t.get(0)),
        p(a, t.get(0)),
        u(a, t.get(0)),
        t.data("cp").onChange.apply(t.parent(), [a, H(a), q(a), t.data("cp").el, 0])
    }
      , g = function(t) {
        o(this).parent().removeClass("cp_focus")
    }
      , v = function() {
        o(this).parent().parent().data("cp").fields.parent().removeClass("cp_focus"),
        o(this).parent().addClass("cp_focus")
    }
      , _ = function(t) {
        t.preventDefault ? t.preventDefault() : t.returnValue = !1;
        var a = o(this).parent().find("input").focus();
        t = {
            el: o(this).parent().addClass("cp_slider"),
            max: 0 < this.parentNode.className.indexOf("_hsb_h") ? 360 : 0 < this.parentNode.className.indexOf("_hsb") ? 100 : 255,
            y: t.pageY,
            field: a,
            val: parseInt(a.val(), 10),
            preview: o(this).parent().parent().data("cp").livePreview
        },
        o(document).mouseup(t, n),
        o(document).mousemove(t, e)
    }
      , e = function(t) {
        return t.data.field.val(Math.max(0, Math.min(t.data.max, parseInt(t.data.val - t.pageY + t.data.y, 10)))),
        t.data.preview && f.apply(t.data.field.get(0), [!0]),
        !1
    }
      , n = function(t) {
        return f.apply(t.data.field.get(0), [!0]),
        t.data.el.removeClass("cp_slider").find("input").focus(),
        o(document).off("mouseup", n),
        o(document).off("mousemove", e),
        !1
    }
      , m = function(t) {
        t.preventDefault ? t.preventDefault() : t.returnValue = !1;
        var a = {
            cal: o(this).parent(),
            y: o(this).offset().top
        };
        return o(document).on("mouseup touchend", a, c),
        o(document).on("mousemove touchmove", a, r),
        t = ("touchstart" == t.type ? t.originalEvent.changedTouches[0] : t).pageY,
        f.apply(a.cal.data("cp").fields.eq(4).val(parseInt(360 * (a.cal.data("cp").height - (t - a.y)) / a.cal.data("cp").height, 10)).get(0), [a.cal.data("cp").livePreview]),
        !1
    }
      , r = function(t) {
        var a = ("touchmove" == t.type ? t.originalEvent.changedTouches[0] : t).pageY;
        return f.apply(t.data.cal.data("cp").fields.eq(4).val(parseInt(360 * (t.data.cal.data("cp").height - Math.max(0, Math.min(t.data.cal.data("cp").height, a - t.data.y))) / t.data.cal.data("cp").height, 10)).get(0), [t.data.preview]),
        !1
    }
      , c = function(t) {
        return i(t.data.cal.data("cp").color, t.data.cal.get(0)),
        s(t.data.cal.data("cp").color, t.data.cal.get(0)),
        o(document).off("mouseup touchend", c),
        o(document).off("mousemove touchmove", r),
        !1
    }
      , b = function(t) {
        t.preventDefault ? t.preventDefault() : t.returnValue = !1;
        var a = {
            cal: o(this).parent(),
            pos: o(this).offset()
        };
        return a.preview = a.cal.data("cp").livePreview,
        o(document).on("mouseup touchend", a, x),
        o(document).on("mousemove touchmove", a, M),
        t = "touchstart" == t.type ? (pageX = t.originalEvent.changedTouches[0].pageX,
        t.originalEvent.changedTouches[0].pageY) : (pageX = t.pageX,
        t.pageY),
        f.apply(a.cal.data("cp").fields.eq(6).val(parseInt(100 * (a.cal.data("cp").height - (t - a.pos.top)) / a.cal.data("cp").height, 10)).end().eq(5).val(parseInt(100 * (pageX - a.pos.left) / a.cal.data("cp").height, 10)).get(0), [a.preview]),
        !1
    }
      , M = function(t) {
        var a = "touchmove" == t.type ? (pageX = t.originalEvent.changedTouches[0].pageX,
        t.originalEvent.changedTouches[0].pageY) : (pageX = t.pageX,
        t.pageY);
        return f.apply(t.data.cal.data("cp").fields.eq(6).val(parseInt(100 * (t.data.cal.data("cp").height - Math.max(0, Math.min(t.data.cal.data("cp").height, a - t.data.pos.top))) / t.data.cal.data("cp").height, 10)).end().eq(5).val(parseInt(100 * Math.max(0, Math.min(t.data.cal.data("cp").height, pageX - t.data.pos.left)) / t.data.cal.data("cp").height, 10)).get(0), [t.data.preview]),
        !1
    }
      , x = function(t) {
        return i(t.data.cal.data("cp").color, t.data.cal.get(0)),
        s(t.data.cal.data("cp").color, t.data.cal.get(0)),
        o(document).off("mouseup touchend", x),
        o(document).off("mousemove touchmove", M),
        !1
    }
      , y = function(t) {
        var a = (t = o(this).parent()).data("cp").color;
        t.data("cp").origColor = a,
        h(a, t.get(0)),
        t.data("cp").onSubmit(a, H(a), q(a), t.data("cp").el)
    }
      , w = function(t) {
        t.stopPropagation(),
        (t = o("#" + o(this).data("cpId"))).data("cp").onBeforeShow.apply(this, [t.get(0)]);
        var a = (e = o(this).offset()).top + this.offsetHeight
          , e = e.left
          , n = (n = "CSS1Compat" == document.compatMode,
        {
            l: window.pageXOffset || (n ? document.documentElement : document.body).scrollLeft,
            w: window.innerWidth || (n ? document.documentElement : document.body).clientWidth
        })
          , r = t.width();
        n.l + n.w < e + r && (e -= r),
        t.css({
            left: +e + "px",
            top: a - 220 + "px"
        }),
        0 != t.data("cp").onShow.apply(this, [t.get(0)]) && t.show(),
        o("html").mousedown({
            cal: t
        }, I),
        t.mousedown(function(t) {
            t.stopPropagation()
        })
    }
      , I = function(t) {
        0 != t.data.cal.data("cp").onHide.apply(this, [t.data.cal.get(0)]) && t.data.cal.hide(),
        o("html").off("mousedown", I)
    }
      , k = function(t) {
        return {
            h: Math.min(360, Math.max(0, t.h)),
            s: Math.min(100, Math.max(0, t.s)),
            b: Math.min(100, Math.max(0, t.b))
        }
    }
      , $ = function() {
        var t = o(this).parent()
          , a = t.data("cp").origColor;
        t.data("cp").color = a,
        i(a, t.get(0)),
        s(a, t.get(0)),
        l(a, t.get(0)),
        d(a, t.get(0)),
        p(a, t.get(0)),
        u(a, t.get(0))
    }
      , a = {
        init: function(c) {
            if ("string" == typeof (c = o.extend({}, t, c || {})).color)
                c.color = S(c.color);
            else if (null != c.color.r && null != c.color.g && null != c.color.b)
                c.color = T(c.color);
            else {
                if (null == c.color.h || null == c.color.s || null == c.color.b)
                    return this;
                c.color = k(c.color)
            }
            return this.each(function() {
                if (!o(this).data("cpId")) {
                    var t = o.extend({}, c)
                      , a = (t.origColor = c.color,
                    "collorpicker_" + parseInt(1e3 * Math.random()))
                      , e = (o(this).data("cpId", a),
                    (a = o('<div class="cp"><div class="cp_color"><div class="cp_color_overlay1"><div class="cp_color_overlay2"><div class="cp_selector_outer"><div class="cp_selector_inner"></div></div></div></div></div><div class="cp_hue"><div class="cp_hue_arrs"><div class="cp_hue_larr"></div><div class="cp_hue_rarr"></div></div></div><div class="cp_new_color"></div><div class="cp_current_color"></div><div class="cp_hex_field"><div class="cp_field_letter">#</div><input type="text" maxlength="6" size="6" /></div><div class="cp_rgb_r cp_field"><div class="cp_field_letter">R</div><input type="text" maxlength="3" size="3" /><div class="cp_field_arrs"><div class="cp_field_uarr"></div><div class="cp_field_darr"></div></div></div><div class="cp_rgb_g cp_field"><div class="cp_field_letter">G</div><input type="text" maxlength="3" size="3" /><div class="cp_field_arrs"><div class="cp_field_uarr"></div><div class="cp_field_darr"></div></div></div><div class="cp_rgb_b cp_field"><div class="cp_field_letter">B</div><input type="text" maxlength="3" size="3" /><div class="cp_field_arrs"><div class="cp_field_uarr"></div><div class="cp_field_darr"></div></div></div><div class="cp_hsb_h cp_field"><div class="cp_field_letter">H</div><input type="text" maxlength="3" size="3" /><div class="cp_field_arrs"><div class="cp_field_uarr"></div><div class="cp_field_darr"></div></div></div><div class="cp_hsb_s cp_field"><div class="cp_field_letter">S</div><input type="text" maxlength="3" size="3" /><div class="cp_field_arrs"><div class="cp_field_uarr"></div><div class="cp_field_darr"></div></div></div><div class="cp_hsb_b cp_field"><div class="cp_field_letter">B</div><input type="text" maxlength="3" size="3" /><div class="cp_field_arrs"><div class="cp_field_uarr"></div><div class="cp_field_darr"></div></div></div><div class="cp_submit"></div></div>').attr("id", a)).addClass("cp_" + t.layout + (t.submit ? "" : " cp_" + t.layout + "_ns")),
                    "light" != t.colorScheme && a.addClass("cp_" + t.colorScheme),
                    a.find("div.cp_submit").html(t.submitText).click(y),
                    t.fields = a.find("input").change(f).blur(g).focus(v),
                    a.find("div.cp_field_arrs").mousedown(_).end().find("div.cp_current_color").click($),
                    t.selector = a.find("div.cp_color").on("mousedown touchstart", b),
                    t.selectorIndic = t.selector.find("div.cp_selector_outer"),
                    t.el = this,
                    t.hue = a.find("div.cp_hue_arrs"),
                    huebar = t.hue.parent(),
                    navigator.userAgent.toLowerCase())
                      , n = "Microsoft Internet Explorer" === navigator.appName
                      , r = n ? parseFloat(e.match(/msie ([0-9]{1,}[\.0-9]{0,})/)[1]) : 0
                      , e = "#ff0000 #ff0080 #ff00ff #8000ff #0000ff #0080ff #00ffff #00ff80 #00ff00 #80ff00 #ffff00 #ff8000 #ff0000".split(" ");
                    if (n && r < 10)
                        for (n = 0; n <= 11; n++)
                            r = o("<div></div>").attr("style", "height:8.333333%; filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=" + e[n] + ", endColorstr=" + e[n + 1] + '); -ms-filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=' + e[n] + ", endColorstr=" + e[n + 1] + ')";'),
                            huebar.append(r);
                    else
                        stopList = e.join(","),
                        huebar.attr("style", "background:-webkit-linear-gradient(top," + stopList + "); background: -o-linear-gradient(top," + stopList + "); background: -ms-linear-gradient(top," + stopList + "); background:-moz-linear-gradient(top," + stopList + "); -webkit-linear-gradient(top," + stopList + "); background:linear-gradient(to bottom," + stopList + "); ");
                    a.find("div.cp_hue").on("mousedown touchstart", m),
                    t.newColor = a.find("div.cp_new_color"),
                    t.currentColor = a.find("div.cp_current_color"),
                    a.data("cp", t),
                    i(t.color, a.get(0)),
                    l(t.color, a.get(0)),
                    s(t.color, a.get(0)),
                    p(t.color, a.get(0)),
                    d(t.color, a.get(0)),
                    h(t.color, a.get(0)),
                    u(t.color, a.get(0)),
                    t.flat ? (a.appendTo(this).show(),
                    a.css({
                        position: "relative",
                        display: "block"
                    })) : (a.appendTo(document.body),
                    o(this).on(t.showEvent, w),
                    a.css({
                        position: "absolute"
                    }))
                }
            })
        },
        showPicker: function() {
            return this.each(function() {
                o(this).data("cpId") && w.apply(this)
            })
        },
        hidePicker: function() {
            return this.each(function() {
                o(this).data("cpId") && o("#" + o(this).data("cpId")).hide()
            })
        },
        setColor: function(a, e) {
            if (e = void 0 === e ? 1 : e,
            "string" == typeof a)
                a = S(a);
            else if (null != a.r && null != a.g && null != a.b)
                a = T(a);
            else {
                if (null == a.h || null == a.s || null == a.b)
                    return this;
                a = k(a)
            }
            return this.each(function() {
                var t;
                o(this).data("cpId") && ((t = o("#" + o(this).data("cpId"))).data("cp").color = a,
                t.data("cp").origColor = a,
                i(a, t.get(0)),
                l(a, t.get(0)),
                s(a, t.get(0)),
                p(a, t.get(0)),
                d(a, t.get(0)),
                u(a, t.get(0)),
                t.data("cp").onChange.apply(t.parent(), [a, H(a), q(a), t.data("cp").el, 1]),
                e && h(a, t.get(0)))
            })
        }
    }
      , C = function(t) {
        return {
            r: (t = parseInt(-1 < t.indexOf("#") ? t.substring(1) : t, 16)) >> 16,
            g: (65280 & t) >> 8,
            b: 255 & t
        }
    }
      , S = function(t) {
        return T(C(t))
    }
      , T = function(t) {
        var a = {
            h: 0,
            s: 0,
            b: 0
        }
          , e = Math.min(t.r, t.g, t.b)
          , n = Math.max(t.r, t.g, t.b)
          , e = n - e;
        return a.b = n,
        a.s = 0 != n ? 255 * e / n : 0,
        a.h = 0 != a.s ? t.r == n ? (t.g - t.b) / e : t.g == n ? 2 + (t.b - t.r) / e : 4 + (t.r - t.g) / e : -1,
        a.h *= 60,
        a.h < 0 && (a.h += 360),
        a.s *= 100 / 255,
        a.b *= 100 / 255,
        a
    }
      , q = function(t) {
        var a, e, n, r = t.h, c = 255 * t.s / 100;
        return t = 255 * t.b / 100,
        0 == c ? r = a = e = t : (n = r % 60 * (t - (c = (255 - c) * t / 255)) / 60,
        (r = 360 == r ? 0 : r) < 60 ? (r = t,
        a = (e = c) + n) : r < 120 ? (e = c,
        r = (a = t) - n) : r < 180 ? (a = t,
        e = (r = c) + n) : r < 240 ? (r = c,
        a = (e = t) - n) : r < 300 ? (e = t,
        r = (a = c) + n) : e = r < 360 ? (a = c,
        (r = t) - n) : a = r = 0),
        {
            r: Math.round(r),
            g: Math.round(a),
            b: Math.round(e)
        }
    }
      , E = function(t) {
        var e = [t.r.toString(16), t.g.toString(16), t.b.toString(16)];
        return o.each(e, function(t, a) {
            1 == a.length && (e[t] = "0" + a)
        }),
        e.join("")
    }
      , H = function(t) {
        return E(q(t))
    };
    o.fn.extend({
        cp: a.init,
        cpHide: a.hidePicker,
        cpShow: a.showPicker,
        cpSetColor: a.setColor
    }),
    o.extend({
        cp: {
            rgbToHex: E,
            rgbToHsb: T,
            hsbToHex: H,
            hsbToRgb: q,
            hexToHsb: S,
            hexToRgb: C
        }
    })
}(jQuery);
