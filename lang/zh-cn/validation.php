<?php

return [
    'accepted' => '该 :attribute 必须被允许',
    'accepted_if' => '该 :attribute 必须在 :other 为 :value 时允许',
    'active_url' => '该 :attribute 不是有效的网址',
    'after' => '该 :attribute 必须是 :date 之后的日期',
    'after_or_equal' => '该 :attribute 必须是 :date 或之后的日期',
    'alpha' => '该 :attribute 必须只包含字符',
    'alpha_dash' => '该 :attribute 必须只包含字符、数字、破折号和下划线。',
    'alpha_num' => '该 :attribute 必须只包含字符和数字。',
    'array' => '该 :attribute 必须是一个数组',
    'before' => '该 :attribute 必须是 :date 之前的日期',
    'before_or_equal' => '该 :attribute 必须是 :date 或之前的日期',
    'between' => [
        'array' => '该 :attribute 必须在 :min 和 :max 物品之间',
        'file' => '该 :attribute 必须在 :min 和 :max KB之间',
        'numeric' => '该 :attribute 必须在 :min 和 :max 之间',
        'string' => '该 :attribute 必须在 :min 和 :max 字符之间',
    ],
    'boolean' => '该 :attribute 字符必须为“true”或“false”',
    'confirmed' => '该 :attribute 确认不匹配',
    'current_password' => '该密码不正确',
    'date' => '该 :attribute 不是有效的日期',
    'date_equals' => '该 :attribute 必须为等同于 :date 的日期',
    'date_format' => '该 :attribute 必须和 :format 同格式',
    'declined' => '该 :attribute 必须被拒绝',
    'declined_if' => '该 :attribute 必须在 :other 为 :value 时拒绝',
    'different' => '该 :attribute 和 :other 必须不同',
    'digits' => '该 :attribute 必须有 :digits 位',
    'digits_between' => '该 :attribute 必须在 :min 到 :max 位之间',
    'dimensions' => '该 :attribute 有无效的图像尺寸',
    'distinct' => '该 :attribute 字段有一个重复的值。',
    'doesnt_start_with' => '该 :attribute 不得以下列各项之一开头：:values',
    'email' => '该 :attribute 必须为有效的邮箱地址',
    'ends_with' => '该 :attribute 必须以下列各项之一结尾：:values',
    'enum' => '该选择的 :attribute 无效',
    'exists' => '该选择的 :attribute 无效',
    'file' => '该 :attribute 必须是文件',
    'filled' => '该 :attribute 字符必须有值',
    'gt' => [
        'array' => '该 :attribute 必须有大于 :value 物品',
        'file' => '该 :attribute 必须大于 :value KB',
        'numeric' => '该 :attribute 必须比 :value 大',
        'string' => '该 :attribute 必须多于 :value 字符',
    ],
    'gte' => [
        'array' => '该 :attribute 必须有 :value 或以上物品',
        'file' => '该 :attribute 必须大于等于 :value KB',
        'numeric' => '该 :attribute 必须大于等于 :value',
        'string' => '该 :attribute 必须大于等于 :value 字符',
    ],
    'image' => '该 :attribute 必须为图片',
    'in' => '该选择的 :attribute 不合法',
    'in_array' => '该 :attribute 不在 :other 中',
    'integer' => '该 :attribute 必须为整数',
    'ip' => '该 :attribute 必须为有效的 IP 地址',
    'ipv4' => '该 :attribute 必须为有效的 IPv4 地址',
    'ipv6' => '该 :attribute 必须为有效的 IPv6 地址',
    'json' => '该 :attribute 必须为有效的 JSON 字符串',
    'lt' => [
        'array' => '该 :attribute 必须少于 :value 物品',
        'file' => '该 :attribute 必须少于 :value KB',
        'numeric' => '该 :attribute 必须少于 :value',
        'string' => '该 :attribute 必须少于 :value 字符',
    ],
    'lte' => [
        'array' => '该 :attribute 必须少于等于 :value 物品',
        'file' => '该 :attribute 必须小于等于 :value KB',
        'numeric' => '该 :attribute 必须小于等于 :value',
        'string' => '该 :attribute 必须小于等于 :value 字符',
    ],
    'mac_address' => '该 :attribute 必须为有效的 MAC 地址',
    'max' => [
        'array' => '该 :attribute 必须少于等于 :max 物品',
        'file' => '该 :attribute 必须小于等于 :max KB',
        'numeric' => '该 :attribute 必须小于等于 :max',
        'string' => '该 :attribute 必须小于等于 :max 字符',
    ],
    'mimes' => '该 :attribute 必须的类型必须为：:values',
    'mimetypes' => '该 :attribute 必须的类型必须为：:values',
    'min' => [
        'array' => '该 :attribute 必须有至少 :min 物品',
        'file' => '该 :attribute 必须为至少 :min KB',
        'numeric' => '该 :attribute 必须为至少 :min',
        'string' => '该 :attribute 必须为至少 :min 字符',
    ],
    'multiple_of' => '该 :attribute 必须为 :value 的倍数',
    'not_in' => '该选择的 :attribute 不合法',
    'not_regex' => '该 :attribute 格式不合法',
    'numeric' => '该 :attribute 必须为数字',
    'password' => [
        'letters' => '该 :attribute 必须包含至少一个字母',
        'mixed' => '该 :attribute 必须包含至少一个大写字母和一个小写字母',
        'numbers' => '该 :attribute 必须包含至少一个数字',
        'symbols' => '该 :attribute 必须包含至少一个符号',
        'uncompromised' => '该给定的 :attribute 已经出现在一个数据泄漏中。请选择不用的 :attribute',
    ],
    'present' => '该 :attribute 字符必须存在',
    'prohibited' => '该 :attribute 字符禁止',
    'prohibited_if' => '该 :attribute 字符当 :other 为 :value 时禁止',
    'prohibited_unless' => '该 :attribute 字符当 :other 不在 :value 时禁止',
    'prohibits' => '该 :attribute 字符禁止 :other 存在',
    'regex' => '该 :attribute 格式不合法',
    'required' => '该 :attribute 字符是必填的',
    'required_array_keys' => '该 :attribute 字符必须包含：:values',
    'required_if' => '该 :attribute 字符当 :other 为 :value 时是必填的',
    'required_unless' => '该 :attribute 字符当 :other 不在 :value 时是必填的',
    'required_with' => '该 :attribute 字符当 :value 是存在时是必填的',
    'required_with_all' => '该 :attribute 字符当 :value 是存在时是必填的',
    'required_without' => '该 :attribute 字符当 :value 是不存在时是必填的',
    'required_without_all' => '该 :attribute 字符当 :value 是没有存在时是必填的',
    'same' => '该 :attribute 和 :other 必须匹配',
    'size' => [
        'array' => '该 :attribute 必须包含 :size 的物品',
        'file' => '该 :attribute 必须为 :size KB',
        'numeric' => '该 :attribute 必须为 :size',
        'string' => '该 :attribute 必须为 :size 字符',
    ],
    'starts_with' => '该 :attribute 必须以下列各项之一开头：:values',
    'string' => '该 :attribute 必须是字符串',
    'timezone' => '该 :attribute 必须是正确的时区',
    'unique' => '该 :attribute 已被拿走',
    'uploaded' => '该 :attribute 上传失败',
    'url' => '该 :attribute 必须为有效的 URL',
    'uuid' => '该 :attribute 必须为有效的 UUID',
    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],
    'attributes' => [],
];
