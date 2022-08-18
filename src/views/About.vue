<template>
    <div class="fs-1">
        <h1 class="fs-2">AddStamp - создаёт stamp/watermark</h1>
        <ul class="fs-4">
            <li>inFile -- file/pdf файл для изменения.</li>
            <li>mode -- string тип печати text/pdf/img.</li>
            <li>
                fileMode -- file/pdf/img файл в качестве stamp/watermark, нужен
                если mode указан как pdf/img.
            </li>
            <li>
                pagePdfMode -- integer какую страницу использовать в качестве
                stamp/watermark, нужен если mode указан как pdf.
            </li>
            <li>onTop -- bool что использовать для печати stamp/watermark.</li>
            <li>update -- bool обновить печать в файле.</li>
            <li>
                selectPage -- integer/string на каких страницах поставить
                печать. all/1,2
            </li>
            <li>
                text -- string текст для печати, нужен если mode указан как
                test.
            </li>
            <li>
                description -- string конфигурации для печати. Подробнее
                смотрите на сайте библиотеки PdfCpu.
            </li>
        </ul>
        <h1 class="fs-2">RemoveWatermarks -- удаляет stamp/watermark.</h1>
        <ul class="fs-4">
            <li>inFile -- file/pdf файл для изменения.</li>
            <li>
                selectPage -- integer/string на каких страницах удалить печать.
            </li>
        </ul>
        <h1 class="fs-2">Collect -- изменяет расположение страниц/дублирует</h1>
        <ul class="fs-4">
            <li>inFile -- file/pdf файл для изменения.</li>
            <li>
                selectPage -- integer/string расположение страниц. - 1,1,1,2-l-1
            </li>
        </ul>
        <h1 class="fs-2">POST /rotate -- переварачивает страницы.</h1>
        <ul class="fs-4">
            <li>inFile -- file/pdf файл для изменения.</li>
            <li>selectPage -- integer/string какие страницы перевернуть</li>
            <li>rotate -- integer на сколько градусов развернуть.</li>
        </ul>
        <h1 class="fs-2">POST /trim -- режет страницы.</h1>
        <ul class="fs-4">
            <li>inFile -- file/pdf файл для изменения.</li>
            <li>selectPage -- integer/string какие страницы изменить</li>
        </ul>
        <h1 class="fs-2">POST /crop -- обрезает страницы.</h1>
        <ul class="fs-4">
            <li>inFile -- file/pdf файл для изменения.</li>
            <li>selectPage -- integer/string какие страницы изменить</li>
            <li>
                description -- string коррдинаты для обрезания - [0 0 200 200]
            </li>
        </ul>
        <h1 class="fs-2">POST /merge -- объединяет страницы.</h1>
        <ul class="fs-4">
            <li>inFiles -- file/pdf файлы для объединения, минимум 2.</li>
        </ul>
        <h1 class="fs-2">POST /optimize -- оптимизирует файл.</h1>
        <ul class="fs-4">
            <li>inFile -- file/pdf файл для оптимизации.</li>
        </ul>
        <h1 class="fs-2">POST /split -- режет файл.</h1>
        <ul class="fs-4">
            <li>inFile -- file/pdf файл для оптимизации.</li>
            <li>span -- int шаг для разделения страницы</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'About',
};
</script>
