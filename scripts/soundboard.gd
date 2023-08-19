extends Object

class_name Soundboard

var snd_lib = {
	&"boom": preload("res://sfx/bomb.mp3")
}

static func play(sound: AudioStreamPlayer):
	sound.play()
