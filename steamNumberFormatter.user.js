// ==UserScript==
// @name Monster Minigame number formatter
// @namespace asd
// @description converts 10,234M to 10.2G
// @version 1.2
// @match *://steamcommunity.com/minigame/towerattack*
// @match *://steamcommunity.com//minigame/towerattack*
// @grant none
// ==/UserScript==


function s()
{
    return g_Minigame.m_CurrentScene;
}

function formatNumber(num)
{
    var exponent = Math.floor(Math.log10(num));
    var truncated = Math.floor(num / Math.pow(10, exponent-2));
    var suffixes = ['','k','M','G','T','P','E','Z','Y','X','W','V'];
    var decimals = 2-exponent%3;
    return truncated/Math.pow(10,decimals)+suffixes[Math.floor(exponent/3)];
}

function firstRun()
{
    window.FormatNumberForDisplay = formatNumber;
}

var timer = window.setInterval(function()
{
    if (g_Minigame && s().m_bRunning && s().m_rgPlayerTechTree)
    {
        window.clearInterval(timer);
        firstRun();
    }
}, 500);

