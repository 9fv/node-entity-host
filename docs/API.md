# node-entity-host: API Reference

**Warning !** Work in progress...

## Classes

<dl>
<dt><a href="#HostEntityError">HostEntityError</a></dt>
<dd><p>A specific error type for {HostEntity}.</p>
</dd>
<dt><a href="#HostEntity">HostEntity</a></dt>
<dd><p>Entity for host.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#_">_</a></dt>
<dd><p>This file is part of node-entity-host</p>
<p>Copyright (c) 2018 SAS 9 Février.</p>
<p>Distributed under the MIT License (license terms are at <a href="http://opensource.org/licenses/MIT">http://opensource.org/licenses/MIT</a>).</p>
</dd>
</dl>

<a name="HostEntityError"></a>

## HostEntityError
A specific error type for {HostEntity}.

**Kind**: global class  
<a name="new_HostEntityError_new"></a>

### new HostEntityError(...args)
Create an new instance of {HostEntityError}.


| Param | Description |
| --- | --- |
| ...args | The arguments. |

<a name="HostEntity"></a>

## HostEntity
Entity for host.

**Kind**: global class  
**Access**: public  

* [HostEntity](#HostEntity)
    * [new HostEntity(value)](#new_HostEntity_new)
    * _instance_
        * [.validate()](#HostEntity+validate) ⇒ <code>Object</code>
    * _static_
        * [.checkParameters(value)](#HostEntity.checkParameters)
        * [.getHostValidator(value)](#HostEntity.getHostValidator) ⇒ <code>\*</code>
        * [.factory(value)](#HostEntity.factory) ⇒ [<code>HostEntity</code>](#HostEntity)

<a name="new_HostEntity_new"></a>

### new HostEntity(value)
Create a new instance of {HostEntity}.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> \| <code>HostValidator</code> | If {string}: IPv4/IPv6 address or hostname. An instance of {HostValidator} else. |

<a name="HostEntity+validate"></a>

### hostEntity.validate() ⇒ <code>Object</code>
Validate the host using {HostValidator}.

**Kind**: instance method of [<code>HostEntity</code>](#HostEntity)  
<a name="HostEntity.checkParameters"></a>

### HostEntity.checkParameters(value)
Check type of the provided parameter(s).

**Kind**: static method of [<code>HostEntity</code>](#HostEntity)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

<a name="HostEntity.getHostValidator"></a>

### HostEntity.getHostValidator(value) ⇒ <code>\*</code>
Auto-convert the provided value to a {HostValidator} instance.

**Kind**: static method of [<code>HostEntity</code>](#HostEntity)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

<a name="HostEntity.factory"></a>

### HostEntity.factory(value) ⇒ [<code>HostEntity</code>](#HostEntity)
A factory static method to create a new instance of {HostEntity}.

**Kind**: static method of [<code>HostEntity</code>](#HostEntity)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> \| <code>HostValidator</code> | If {string}: IPv4/IPv6 address or hostname. An instance of {HostValidator} else. |

<a name="_"></a>

## _
This file is part of node-entity-host

Copyright (c) 2018 SAS 9 Février.

Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).

**Kind**: global constant  

## <a name="license"> License

>
> [The MIT License](https://opensource.org/licenses/MIT)
>
> Copyright (c) 2018 SAS 9 Février
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
>
