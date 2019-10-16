# cinema-card
This is a card I quickly created to recreate a remotecontrol in the homeassistant UI because I never can find the damn thing ..
Here's an example of the remote I recreated for my bedroom tv:

![Tv and ventilator config](https://raw.githubusercontent.com/drbytes/cinema-card/master/example.jpg)

The lovelace config for the tv looks like this:

```
buttons:
  - color: red
    entity: switch.finluxnetflix
    icon: mdi-netflix
    state: toggle
  - color: red
    entity: switch.finluxyoutube
    icon: mdi-youtube
    state: toggle
  - type: doublespace
  - color: grey
    entity: switch.finluxyup
    icon: mdi-arrow-up
    state: toggle
  - type: break
  - type: doublespace
  - type: doublespace
  - color: grey
    entity: switch.finluxleft
    icon: mdi-arrow-left
    state: toggle
  - color: grey darken-2
    entity: switch.finluxok
    icon: mdi-check-outline
    state: toggle
  - color: grey
    entity: switch.finluxright
    icon: mdi-arrow-right
    state: toggle
  - type: break
  - type: doublespace
  - type: doublespace
  - type: doublespace
  - color: grey
    entity: switch.finluxdown
    icon: mdi-arrow-down
    state: toggle
  - type: doublespace
  - color: grey darken-2
    entity: switch.finluxback
    icon: mdi-undo
    state: toggle
  - type: break
  - color: red accent-4
    entity: switch.bedroombaronoff
    icon: mdi-power-settings
    state: toggle
  - type: space
  - color: indigo darken-2
    entity: switch.bedroombarvolume
    icon: mdi-volume-plus
    state: turn_on
  - color: indigo
    entity: switch.bedroombarvolume
    icon: mdi-volume-minus
    state: turn_off
  - type: space
  - color: green
    entity: switch.bedroombareffect
    icon: mdi-function-variant
    state: toggle
cardsize: 3
masterbutton:
  color: red accent-4
  entity: switch.finluxonoff
  icon: mdi-power-settings
  state: toggle
title: Tv Boven
type: 'custom:cinema-card'
```

And here's the ventilator config :
```
buttons:
  - type: doublespace
  - color: indigo
    entity: switch.fan
    icon: mdi-numeric-1-box
    state: turn_on
  - type: space
  - color: indigo darken-2
    entity: switch.fanspeed2
    icon: mdi-numeric-2-box
    state: turn_on
  - type: space
  - color: indigo darken-4
    entity: switch.fanspeed3
    icon: mdi-numeric-3-box
    state: turn_on
cardsize: 1
masterbutton:
  color: red accent-4
  entity: switch.fan
  icon: mdi-power-settings
  state: turn_off
title: Ventilator
type: 'custom:cinema-card'
```
