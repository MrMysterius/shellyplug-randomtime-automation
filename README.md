# ShellyPlug Randomtime Automation
> NodeJS automated ShellyPlug toggle at semi random times

An Automation Script for toggling an ShellyPlugs Output at random Times of Day.

## Working Shellys

- Shelly Plug S

## Installation / Usage

Prerequisites include:
- [NodeJS](https://nodejs.org) (Tested on v19 and v16)
- [pnpm](https://pnpm.io)

Installation:
- Clone this Repository
- Execute `pnpm install`

Usage:
- Copy `config.example.json` to `config.json`
- Edit `config.json` to your liking. (Refer to [Config](#Config)
- Start with `pnpm start`

## Config

The config is an array of config objects:

Structure Visualisation:
```json
[ // <-- Array Opening

  { // <<-- Config Object
  },

  { // <<-- Config Object
  }

] // <-- Array Closing
```

### Config Object Example

This is a action that switches the ShellyPlug on at 192.168.33.1 between 10:00 and 10:30.

```json
{
  "ip": "192.168.33.1",
  "action": "on",
  "time": {
    "startHour": 10,
    "startMinute": 0,
    "minuteRange": 30,
    "weekDays": []
  },
  "shelly": {
    "username": "admin",
    "password": "test"
  }
}
```

### Config Object Properties

#### `ip`

This should be a string containing the ip of the ShellyPlug you want to target with this action.

#### `action`

This is a string which should be on of these actions (case-sensitive):
- `on` turning ShellyPlug on
- `off` turning ShellyPlug off
- `toggle` toggling the current state of the ShellyPlug

#### `time`

This is an object containing the start time and range of the randomization.

##### `time.startHour`

The hour mark at which the randomization range starts. This is a number. **This should be in the 24h format.**

##### `time.startMinute`

The minute mark within the hour at which the randomization range starts. This is a number.

##### `time.minuteRange`

The range in minutes in which it randomizes from the start time. This is a number.

##### `time.weekdays`

An array of numbers on which weekdays this action should happen. (Weekdays are with numbers not with names, so use 1 for Monday, 2 for Tuesday, and so on.)

#### `shelly`

This is an object containing the credentials for the shelly plug.

##### `shelly.username`

This is the username for the ShellyPlug, the default from ShellyPlugs for this is `admin`. This is a string.

##### `shelly.password`

This is the password for the ShellyPlug. This is a string.
