# default fields configs

from bsg.core import extfields

from extdirect.django.metadata import get_field_list

def meta_fields(model, mappings={}, exclude=[], get_metadata=None, fields=None):
    """
    Generate metadata for a given Django model.
    You could provide the `get_metadata` function to generate
    custom metadata for some fields.
    """
    
    fields = get_field_list(model, exclude=exclude)
    result = list()
    # always add unicode field to models
    result.append({'name': '__unicode__', 'type': 'string', 'allowBlank': True})
    for field in fields:
        config = None
        klass = field.__class__.__name__
        if get_metadata:
            #If get_metadata is not None, then it must be a callable object
            #and should return the metadata for a given field or None
            config = get_metadata(field)
            
        if not config:

            #If get_metadata it's None or returned None for a given field
            #then, we try to generate the metadata for that field
            config = {}
            fieldCls = getattr(extfields, klass, None)
            if fieldCls:
                configCls = fieldCls(field)
                config = configCls.getReaderConfig()
                
                if isinstance(config, list):
                #foreign key and m2m fields generates two configs: one - for keys field, another - for values field
                    for item in config:
                        append_field_metadata(field, mappings, configCls)
                else:
                    append_field_metadata(field, mappings, configCls)

            else:                    
                raise RuntimeError("Field class `%s` not found in extfields.py. "
                                   "Use `get_metadata` to resolve the field `%s`." % (klass, field.name))
            
            if isinstance(config, list):
                for item in config:
                    result.append(item)
            else:
                result.append(config)

    return result
    

def append_field_metadata(field, mappings, configcls):
    if field.name in mappings:
        config['mapping'] = unicode(field.name)
        config['name'] = unicode(mappings[field.name])

        if field.has_default():
            if callable(field.default):
                config['defaultValue'] = configcls.getValue(field.default())
            else:
                config['defaultValue'] = configcls.getValue(field.default)