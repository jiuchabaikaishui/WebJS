$(function() {
    // 全选案例
    $('.checkall').change(function() {
        $('.j-checkbox, .checkall').prop('checked', $(this).prop('checked'));
        if ($(this).prop('checked')) {
            $('.cart-item').addClass('check-cart-item');
        } else {
            $('.cart-item').removeClass('check-cart-item');
        }
    });
    $('.j-checkbox').change(function() {
        if ($(this).prop('checked')) {
            $(this).parents('.cart-item').addClass('check-cart-item');
        } else {
            $(this).parents('.cart-item').removeClass('check-cart-item');
        }
        if ($('.j-checkbox:checked').length == $('.j-checkbox').length) {
            $('.checkall').prop('checked', true);
        } else {
            $('.checkall').prop('checked', false);
        }
    });

    // 增减商品数量与小计案例
    $('.increment').click(function() {
        let n = parseInt($(this).siblings('.itxt').val());
        n++;
        $(this).siblings('.itxt').val(n);

        var p = $(this).parents('.p-num').siblings('.p-price').html().substr(1);
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (p*n).toFixed(2));
        
        sum();
    });
    $('.decrement').click(function() {
        let n = parseInt($(this).siblings('.itxt').val());
        if (n > 1) {
            n--;
            $(this).siblings('.itxt').val(n);

            var p = $(this).parents('.p-num').siblings('.p-price').html().substr(1);
            $(this).parents('.p-num').siblings('.p-sum').html('￥' + (p*n).toFixed(2));

            sum();
        }
    });

    // 计算总计和总额案例
    function sum() {
        var n = 0;
        $('.itxt').each(function(i, d) {
            n += parseInt($(d).val());
        });
        $('.amount-sum em').html(n);
        console.log(n);

        var amount = 0;
        $('.p-sum').each(function(i, d) {
            amount += parseFloat($(d).html().substr(1));
        });
        $('.price-sum em').html('￥' + amount.toFixed(2));
    }
    sum();

    // 删除商品案例
    $('.p-action').click(function() {
        $(this).parent().remove();
        if ($('.j-checkbox:checked').length == 0) {
            $('.checkall').prop('checked', false);
        }
        sum();
    });
    $('.remove-batch').click(function() {
        $('.j-checkbox:checked').parents('.cart-item').remove();
        if ($('.j-checkbox:checked').length == 0) {
            $('.checkall').prop('checked', false);
        }
        sum();
    });
    $('.clear-all').click(function() {
        $('.cart-item').remove();
        if ($('.j-checkbox:checked').length == 0) {
            $('.checkall').prop('checked', false);
        }
        sum();
    });
});