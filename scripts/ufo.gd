extends Traveler

@export var death: PackedScene

var _hp = 2

func _init():
	_velocity = Vector2(0, 2)


func _process(_delta):
	super(_delta)
	rotate(PI / 180)


func _on_collide(_body):
	_hp -= 1
	$Animation.play(&"flash")
	$Hit.play()
	if _hp <= 0:
		var d = death.instantiate()
		d.position = position
		get_parent().add_child(d)
		queue_free()


func _ready():
	$Sprite.play()
