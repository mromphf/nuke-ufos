extends Enemy

class_name Ufo

func _process(_delta):
	super(_delta)
	$Sprite.rotate(PI / 180)


func _on_collide(body):
	super(body)
	$Animation.play(&"flash")
	$Hit.play()


func _ready():
	$Sprite.play()
